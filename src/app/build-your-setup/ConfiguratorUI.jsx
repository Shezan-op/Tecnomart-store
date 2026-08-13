"use client";
import React, { useState } from 'react';
import { useConfigurator } from './ConfiguratorContext';
import { stepsOrder } from '../../lib/configurator/recommendation';
import { getOptionsForCategory } from '../../lib/configurator/compatibility';
import { generateNormalizedPayload, generateWhatsAppLink } from '../../lib/configurator/whatsapp';
import styles from './ConfiguratorUI.module.css';

export default function ConfiguratorUI() {
  const { 
    buildState, isLoaded, totalINR, 
    updateBuildType, updatePriority, updateGoal, updateSelection, setMode,
    nextStep, prevStep, resetBuild 
  } = useConfigurator();

  if (!isLoaded) return <div className={styles.loading}>Loading configurator...</div>;

  // The step logic
  // Step 0: Build Type
  // Step 1: Priority
  // Step 2: Goal
  // Step 3 to N: Component Steps
  // Step N+1: Final Form

  const currentStep = buildState.stepIndex;

  return (
    <div className={styles.container}>
      <div className={styles.mainArea}>
        {currentStep === 0 && <StepBuildType onSelect={updateBuildType} />}
        {currentStep === 1 && <StepPriority onSelect={updatePriority} onBack={prevStep} />}
        {currentStep === 2 && <StepGoal buildType={buildState.buildType} onSelect={updateGoal} onBack={prevStep} />}
        
        {currentStep >= 3 && currentStep < 3 + stepsOrder.length && (
          <ComponentStep 
            stepName={stepsOrder[currentStep - 3]} 
            onNext={nextStep} 
            onBack={prevStep}
          />
        )}

        {currentStep === 3 + stepsOrder.length && (
          <FinalForm onBack={prevStep} />
        )}
      </div>

      {currentStep > 2 && currentStep <= 3 + stepsOrder.length && (
        <div className={styles.sidebar}>
          <BuildSummary />
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// UI Components
// ----------------------------------------------------

function StepBuildType({ onSelect }) {
  const options = [
    { id: 'gaming-pc', title: 'Gaming PC', desc: 'A tower built for pure gaming performance.' },
    { id: 'workstation-pc', title: 'Workstation', desc: 'Optimized for 3D rendering, video editing, and heavy tasks.' },
    { id: 'complete-setup', title: 'Complete Setup', desc: 'PC plus a perfectly matched monitor.' }
  ];

  return (
    <div className={styles.stepBox}>
      <h2>What do you want to build?</h2>
      <div className={styles.cardGrid}>
        {options.map(opt => (
          <button key={opt.id} className={styles.card} onClick={() => onSelect(opt.id)}>
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepPriority({ onSelect, onBack }) {
  const options = [
    { id: 'value', title: 'Best Value', desc: 'Maximum performance for your rupee.' },
    { id: 'balanced', title: 'Balanced (Recommended)', desc: 'The sweet spot of high performance and reasonable cost.' },
    { id: 'performance', title: 'Maximum Performance', desc: 'Enthusiast tier parts with no compromises.' }
  ];

  return (
    <div className={styles.stepBox}>
      <h2>What matters most to you?</h2>
      <div className={styles.cardGrid}>
        {options.map(opt => (
          <button key={opt.id} className={styles.card} onClick={() => onSelect(opt.id)}>
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
          </button>
        ))}
      </div>
      <button className={styles.textBtn} onClick={onBack}>&larr; Back</button>
    </div>
  );
}

function StepGoal({ buildType, onSelect, onBack }) {
  let options = [];
  if (buildType === 'gaming-pc' || buildType === 'complete-setup') {
    options = [
      { id: 'casual', title: 'Everyday Gaming', desc: '1080p, great frames on most games.' },
      { id: 'competitive', title: 'Competitive', desc: 'High refresh rate esports.' },
      { id: 'creative', title: '1440p / 4K / Streaming', desc: 'Maximum visuals and heavy streaming.' }
    ];
  } else {
    options = [
      { id: 'creative', title: 'Video / Photo', desc: 'Adobe suite, DaVinci Resolve.' },
      { id: 'workstation', title: '3D CAD / Rendering', desc: 'Blender, Maya, Unreal Engine.' },
      { id: 'heavy-multitasking', title: 'AI / Heavy Coding', desc: 'Local LLMs, massive docker stacks.' }
    ];
  }

  return (
    <div className={styles.stepBox}>
      <h2>What is your primary goal?</h2>
      <div className={styles.cardGrid}>
        {options.map(opt => (
          <button key={opt.id} className={styles.card} onClick={() => onSelect(opt.id)}>
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
          </button>
        ))}
      </div>
      <button className={styles.textBtn} onClick={onBack}>&larr; Back</button>
    </div>
  );
}

function ComponentStep({ stepName, onNext, onBack }) {
  const { buildState, updateSelection, setMode } = useConfigurator();
  
  // If complete-setup, show monitor. Otherwise, skip monitor step automatically
  if (stepName === 'monitor' && buildState.buildType !== 'complete-setup') {
    // React trick to auto-skip in render cycle if not needed
    setTimeout(onNext, 0); 
    return null;
  }

  // Find the valid options for this category
  // Convert state selections back to items for compatibility check
  const resolvedSelections = { ...buildState.selections };
  const validOptions = getOptionsForCategory(stepName, resolvedSelections);
  
  // The current selected item
  const selectedItem = buildState.selections[stepName];

  // We should only show 3 options according to rules, but let's show all valid for now, 
  // or slice to 3 for clean UX.
  const displayOptions = validOptions.slice(0, 3);

  const handleSelect = (item) => {
    updateSelection(stepName, item);
  };

  return (
    <div className={styles.stepBox}>
      <div className={styles.stepHeader}>
        <h2>Select {stepName.toUpperCase()}</h2>
        <div className={styles.modeToggle}>
          <button 
            className={buildState.mode === 'recommended' ? styles.activeMode : ''} 
            onClick={() => setMode('recommended')}
          >
            Recommended
          </button>
          <button 
            className={buildState.mode === 'customize' ? styles.activeMode : ''} 
            onClick={() => setMode('customize')}
          >
            Customize
          </button>
        </div>
      </div>
      
      {displayOptions.length === 0 ? (
        <p>No compatible items found. Try changing previous selections.</p>
      ) : (
        <div className={styles.componentGrid}>
          {displayOptions.map(item => {
            const isSelected = selectedItem?.id === item.id;
            return (
              <div 
                key={item.id} 
                className={`${styles.compCard} ${isSelected ? styles.compSelected : ''}`}
                onClick={() => handleSelect(item)}
              >
                <div className={styles.compBadge}>{item.performanceTier}</div>
                <h4>{item.brand} {item.name}</h4>
                <p className={styles.compLabel}>{item.customerLabel}</p>
                <p className={styles.compDesc}>{item.shortDescription}</p>
                {/* Price hidden per requirement until summary, but maybe show +$ difference? For now hidden. */}
              </div>
            );
          })}
        </div>
      )}

      <div className={styles.stepFooter}>
        <button className={styles.textBtn} onClick={onBack}>&larr; Back</button>
        <button 
          className={styles.primaryBtn} 
          onClick={onNext} 
          disabled={!selectedItem}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function BuildSummary() {
  const { buildState, totalINR } = useConfigurator();
  const { selections } = buildState;

  return (
    <div className={styles.summaryBox}>
      <h3>Your Build</h3>
      <div className={styles.summaryList}>
        {stepsOrder.map(cat => {
          const item = selections[cat];
          if (!item && cat === 'monitor' && buildState.buildType !== 'complete-setup') return null;
          return (
            <div key={cat} className={styles.summaryItem}>
              <span className={styles.summaryCat}>{cat.toUpperCase()}</span>
              <span className={styles.summaryName}>
                {item ? `${item.brand} ${item.name}` : 'Pending...'}
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.summaryTotal}>
        <span>Estimated Total</span>
        <span>₹{totalINR.toLocaleString()}</span>
      </div>
    </div>
  );
}

function FinalForm({ onBack }) {
  const { buildState, totalINR, resetBuild } = useConfigurator();
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', city: '', notes: '' });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = generateNormalizedPayload(buildState, formData);
    console.log("Submitting Normalized Payload:", JSON.stringify(payload, null, 2));
    
    // Redirect to WhatsApp
    const waLink = generateWhatsAppLink(payload);
    window.open(waLink, '_blank');
    
    // Reset for next
    resetBuild();
  };

  return (
    <div className={styles.stepBox}>
      <h2>Finalize Your Request</h2>
      <p style={{marginBottom: '2rem'}}>Review your build in the sidebar, then provide your details to request a final quote and confirm availability.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>WhatsApp Number</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>City</label>
          <input required type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>Additional Notes (Optional)</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" />
        </div>

        <div className={styles.stepFooter}>
          <button type="button" className={styles.textBtn} onClick={onBack}>&larr; Back</button>
          <button type="submit" className={styles.primaryBtn}>
            Send via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
