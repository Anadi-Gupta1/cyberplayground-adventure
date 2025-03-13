
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div 
        className={`cursor-dot fixed w-3 h-3 rounded-full bg-cyber-purple z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 mix-blend-difference ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`cursor-ring fixed w-8 h-8 rounded-full border-2 border-cyber-blue z-[9998] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'left 0.15s ease-out, top 0.15s ease-out, width 0.2s ease-out, height 0.2s ease-out',
        }}
      />
    </>
  );
};

export default CursorEffect;
