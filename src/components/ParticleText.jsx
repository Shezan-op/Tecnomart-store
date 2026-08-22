"use client";
import React, { useRef, useEffect } from 'react';

class Particle {
  constructor(x, y, color, dpr) {
    this.originX = x;
    this.originY = y;
    this.x = x + (Math.random() - 0.5) * 40;
    this.y = y + (Math.random() - 0.5) * 40;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.ease = 0.06 + Math.random() * 0.04;
    this.friction = 0.88 + Math.random() * 0.05;
    this.size = 2.2 * dpr;
  }

  update(mouse, ctx) {
    if (mouse.isActive) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius && distance > 0) {
        const force = ((mouse.radius - distance) / mouse.radius) * 35;
        const angle = Math.atan2(dy, dx);
        this.vx -= Math.cos(angle) * force;
        this.vy -= Math.sin(angle) * force;
      }
    }
    
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    this.x += this.vx + (this.originX - this.x) * this.ease;
    this.y += this.vy + (this.originY - this.y) * this.ease;
    
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleText({ text = "TecnoMart", textColor = "#FDE047", fontSize = 140 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let animationFrameId;
    let particles = [];
    
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    let width = 0;
    let height = 0;
    
    const mouse = {
      radius: 110 * dpr,
      x: -2000,
      y: -2000,
      isActive: false,
      timeout: null
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      mouse.x = (clientX - rect.left) * (canvas.width / rect.width);
      mouse.y = (clientY - rect.top) * (canvas.height / rect.height);
      mouse.isActive = true;

      clearTimeout(mouse.timeout);
      mouse.timeout = setTimeout(() => {
        mouse.isActive = false;
      }, 1500);
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    const initParticles = () => {
      if (!container || !canvas) return;
      
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      width = Math.floor(rect.width * dpr);
      height = Math.floor(rect.height * dpr);
      
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Calculate font sizing to fill ~90% container width
      ctx.clearRect(0, 0, width, height);
      ctx.font = `800 ${fontSize * dpr}px Hubot Sans, sans-serif`;
      
      const metrics = ctx.measureText(text);
      const textWidth = metrics.width || 1;
      const targetWidth = width * 0.92;
      const scaleFactor = targetWidth / textWidth;
      const calculatedFontSize = Math.min(fontSize * dpr * scaleFactor, height * 0.8);
      
      ctx.font = `800 ${calculatedFontSize}px Hubot Sans, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = textColor;
      ctx.fillText(text, width / 2, height / 2);
      
      const imageData = ctx.getImageData(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);
      
      particles = [];
      const gap = Math.max(2, Math.floor(3 * dpr));
      
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const a = imageData.data[index + 3];
          
          if (a > 120) {
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];
            const color = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
            particles.push(new Particle(x, y, color, dpr));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse, ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (document.fonts) {
      document.fonts.ready.then(() => {
        initParticles();
      });
    } else {
      initParticles();
    }
    
    animate();

    window.addEventListener('resize', initParticles);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('touchend', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('touchend', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouse.timeout);
    };
  }, [text, textColor, fontSize]);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center cursor-crosshair">
      <canvas ref={canvasRef} className="block max-w-full" />
    </div>
  );
}
