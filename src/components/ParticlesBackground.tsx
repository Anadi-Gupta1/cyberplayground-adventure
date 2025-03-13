
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  spinSpeed: number;
  color: string;
  element: HTMLDivElement;
  lifespan: number;
}

const ParticlesBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const colors = [
    'rgba(0, 144, 255, 0.3)', // Cyber blue
    'rgba(112, 0, 255, 0.3)',  // Cyber purple
    'rgba(255, 0, 128, 0.3)',  // Neon pink
    'rgba(0, 255, 230, 0.3)',  // Cyan
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    
    const createParticle = () => {
      if (!containerRef.current) return;
      
      const size = Math.random() * 8 + 2;
      const x = Math.random() * containerWidth;
      const y = containerHeight + size;
      const speedY = Math.random() * 1 + 0.5;
      const spinSpeed = (Math.random() - 0.5) * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const lifespan = Math.random() * 10000 + 5000; // 5-15 seconds
      
      const element = document.createElement('div');
      element.className = 'particle';
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.backgroundColor = color;
      element.style.animationDuration = `${lifespan}ms`;
      
      containerRef.current.appendChild(element);
      
      particlesRef.current.push({
        x, y, size, speedY, spinSpeed, color, element, lifespan
      });
      
      // Remove particle after its lifespan
      setTimeout(() => {
        element.remove();
        particlesRef.current = particlesRef.current.filter(p => p.element !== element);
      }, lifespan);
    };
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }
    
    // Add new particles periodically
    const interval = setInterval(() => {
      if (particlesRef.current.length < 100) {
        createParticle();
      }
    }, 200);
    
    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particlesRef.current.forEach(particle => {
        particle.element.remove();
      });
      particlesRef.current = [];
    };
  }, []);
  
  return (
    <div ref={containerRef} className="particle-container" aria-hidden="true"></div>
  );
};

export default ParticlesBackground;
