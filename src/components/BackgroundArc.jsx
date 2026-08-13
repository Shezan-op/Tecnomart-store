"use client";
export default function BackgroundArc({ topOffset = '50%', color = 'rgba(255, 255, 255, 0.05)' }) {
  return (
    <div style={{
      position: 'absolute',
      top: topOffset,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '150vw',
      height: '150vh',
      zIndex: 0,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: '100%' }}
      >
        {/* A simple large elliptical arc that looks like a circle passing through */}
        <ellipse cx="50" cy="50" rx="50" ry="50" fill="none" stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
