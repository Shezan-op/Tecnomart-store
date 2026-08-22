"use client";
import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const isMobile = width < 768;
    const particleCount = isMobile ? 12 : 28; // Lean, zero-overhead count

    const colors = [
      { r: 255, g: 255, b: 255, hex: 'rgba(255,255,255,0.25)' },
      { r: 253, g: 224, b: 71, hex: 'rgba(253,224,71,0.3)' },
      { r: 250, g: 204, b: 21, hex: 'rgba(250,204,21,0.25)' },
      { r: 234, g: 179, b: 8, hex: 'rgba(234,179,8,0.2)' },
    ];

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const colorIdx = i % colors.length;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.4,
        speedY: Math.random() * 0.3 + 0.08,
        speedX: (Math.random() - 0.5) * 0.2,
        colorIdx,
      });
    }

    let animationFrameId;
    let isPaused = false;

    const render = () => {
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);

      // Batch draw particles by color (only 4 draw calls total per frame)
      for (let c = 0; c < colors.length; c++) {
        ctx.fillStyle = colors[c].hex;
        ctx.beginPath();

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.colorIdx !== c) continue;

          ctx.moveTo(p.x + p.size, p.y);
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

          // Flow upwards
          p.y -= p.speedY;
          p.x += p.speedX;

          // Wrap around
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        cancelAnimationFrame(animationFrameId);
      } else {
        isPaused = false;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        transform: 'translateZ(0)'
      }}
    />
  );
}
