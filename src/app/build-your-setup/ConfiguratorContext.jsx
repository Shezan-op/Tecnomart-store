"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { initialBuildState, saveBuildState, loadBuildState, clearBuildState } from '../../lib/configurator/state';
import { generateRecommendedBuild } from '../../lib/configurator/recommendation';
import { calculateTotal } from '../../lib/configurator/whatsapp';

const ConfiguratorContext = createContext(null);

export function ConfiguratorProvider({ children }) {
  const [buildState, setBuildState] = useState(initialBuildState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state on mount
  useEffect(() => {
    const draft = loadBuildState();
    if (draft && draft.buildType) {
      // If we have a valid draft with at least a buildType, ask or auto-resume
      setBuildState(draft);
    }
    setIsLoaded(true);
  }, []);

  // Save state on change
  useEffect(() => {
    if (isLoaded && buildState.buildType) {
      saveBuildState(buildState);
    }
  }, [buildState, isLoaded]);

  const updateBuildType = (type) => {
    setBuildState(prev => ({ ...prev, buildType: type, stepIndex: prev.stepIndex + 1 }));
  };

  const updatePriority = (priority) => {
    setBuildState(prev => ({ ...prev, priority, stepIndex: prev.stepIndex + 1 }));
  };

  const updateGoal = (goal) => {
    setBuildState(prev => {
      // After goal is set, we can auto-generate the recommended build
      const tempState = { ...prev, goal, stepIndex: prev.stepIndex + 1 };
      const recommended = generateRecommendedBuild(tempState);
      return recommended;
    });
  };

  const setMode = (mode) => {
    setBuildState(prev => ({ ...prev, mode }));
  };

  const updateSelection = (category, item) => {
    setBuildState(prev => {
      const newState = {
        ...prev,
        selections: {
          ...prev.selections,
          [category]: item
        }
      };
      // If we're in recommended mode, an upstream change might require re-recommending downstream
      // But for simplicity in v1, if they manually change something, we switch to 'customize' mode
      newState.mode = 'customize';
      return newState;
    });
  };

  const nextStep = () => {
    setBuildState(prev => ({ ...prev, stepIndex: prev.stepIndex + 1 }));
  };

  const prevStep = () => {
    setBuildState(prev => ({ ...prev, stepIndex: Math.max(0, prev.stepIndex - 1) }));
  };

  const jumpToStep = (index) => {
    setBuildState(prev => ({ ...prev, stepIndex: index }));
  };

  const resetBuild = () => {
    clearBuildState();
    setBuildState({ ...initialBuildState, buildId: crypto.randomUUID() });
  };

  const totalINR = calculateTotal(buildState.selections);

  const contextValue = useMemo(() => ({
    buildState,
    isLoaded,
    totalINR,
    updateBuildType,
    updatePriority,
    updateGoal,
    updateSelection,
    setMode,
    nextStep,
    prevStep,
    jumpToStep,
    resetBuild
  }), [buildState, isLoaded, totalINR]);

  return (
    <ConfiguratorContext.Provider value={contextValue}>
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) throw new Error("useConfigurator must be used within ConfiguratorProvider");
  return ctx;
}
