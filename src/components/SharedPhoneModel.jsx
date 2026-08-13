import { useEffect, useState } from 'react';
import styles from './SharedPhoneModel.module.css';

// Simple SVG pointer arrow connecting card to phone edge
export function PointerArrow({ fromSide, className = '' }) {
  const isLeft = fromSide === 'left';
  return (
    <svg
      className={`${styles.curvedArrow} ${isLeft ? styles.pointerLeft : styles.pointerRight} ${className}`}
      viewBox="0 0 120 60"
      preserveAspectRatio="none"
    >
      <path
        d={isLeft ? 'M110,30 L10,30' : 'M10,30 L110,30'}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        className="pointer-line"
        d={isLeft ? 'M110,30 L10,30' : 'M10,30 L110,30'}
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="120"
        strokeDashoffset="120"
      />
      <circle
        className="pointer-dot"
        cx={isLeft ? 110 : 10}
        cy={30}
        r={4}
        fill="rgba(255,255,255,0.8)"
        opacity="0"
      />
    </svg>
  );
}

// CSS 3D Phone model — front and back via backface-visibility
export function PhoneModel({ glareFrontRef, glareBackRef, rightEdgeRef }) {
  const [rims, setRims] = useState([]);

  // Build rim layers
  useEffect(() => {
    const depth = 22;
    const layers = 44;
    const newRims = [];
    for (let i = 1; i < layers; i++) {
      const z = (i / layers) * depth - depth / 2;
      newRims.push(z);
    }
    setRims(newRims);
  }, []);

  return (
    <div className={styles.phone3d}>
      {/* Front face */}
      <div className={`${styles.face} ${styles.faceFront}`}>
        <div className={styles.innerScreen}>
          <iframe
            src="/screen.html"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '36px', backfaceVisibility: 'hidden', overflow: 'hidden' }}
            title="Tecnomart Screen Mobile"
          />
        </div>
        <div className={styles.glareContainer}>
          <div ref={glareFrontRef} className={styles.glareFront} />
        </div>
      </div>

      {/* Rim layers for thickness */}
      {rims.map((z, idx) => (
        <div key={idx} className={styles.rimLayer} style={{ transform: `translateZ(${z}px)` }} />
      ))}

      {/* Back face */}
      <div className={`${styles.face} ${styles.faceBack}`}>
        <div className={styles.cameraBump}>
          <div className={styles.lens} />
          <div className={styles.lens} />
        </div>
        <div className={styles.appleLogo}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
          </svg>
        </div>
        <div className={styles.glareContainer}>
          <div ref={glareBackRef} className={styles.glareBack} />
        </div>
      </div>

      {/* Edges */}
      <div ref={rightEdgeRef} className={`${styles.faceEdge} ${styles.faceRight}`} />
      <div className={`${styles.faceEdge} ${styles.faceLeft}`} />
      <div className={`${styles.faceEdge} ${styles.faceTop}`} />
      <div className={`${styles.faceEdge} ${styles.faceBottom}`} />
    </div>
  );
}
