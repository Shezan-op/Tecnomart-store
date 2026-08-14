const STORAGE_KEY = 'pcMart.customBuild.v2';

export const initialBuildState = {
  version: 2,
  buildId: null,
  buildType: null, // gaming-pc, workstation-pc, complete-setup
  priority: null, // value, balanced, performance
  goal: null, 
  mode: 'recommended', // recommended, customize
  selections: {
    cpu: null,
    gpu: null,
    motherboard: null,
    memory: null,
    storage: null,
    psu: null,
    cooling: null,
    cabinet: null,
    monitor: null
  },
  stepIndex: 0,
  createdAt: null,
  updatedAt: null
};

export function saveBuildState(state) {
  if (typeof window === 'undefined') return;
  const stateToSave = {
    ...state,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
}

export function loadBuildState() {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.version !== 2) {
      clearBuildState();
      return null;
    }
    return parsed;
  } catch (e) {
    return null;
  }
}

export function clearBuildState() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
