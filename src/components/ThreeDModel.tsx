
import React, { useEffect, useRef, useState } from 'react';

interface ThreeDModelProps {
  type: 'shield' | 'custom';
  url?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ type, url }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Load Spline Viewer script if not already loaded
    if (!document.querySelector('script[src*="splinetool"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.76/build/spline-viewer.js';
      script.onload = () => {
        setIsLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Function to optimize Spline Viewer for mobile
  useEffect(() => {
    const optimizeSplineForMobile = () => {
      const viewers = document.querySelectorAll('spline-viewer');
      viewers.forEach((viewer: any) => {
        if (isMobile) {
          // Reduce quality for mobile
          viewer.setAttribute('loading-anim', 'false');
          viewer.setAttribute('pixel-ratio', '1');
          viewer.setAttribute('rendering-scale', '0.5');
        } else {
          // Default quality for desktop
          viewer.setAttribute('loading-anim', 'true');
          viewer.setAttribute('pixel-ratio', '2');
          viewer.setAttribute('rendering-scale', '1');
        }
      });
    };
    
    if (isLoaded) {
      optimizeSplineForMobile();
    }
  }, [isLoaded, isMobile]);
  
  // Determine which model to show
  const getModelUrl = () => {
    if (url) return url;
    
    switch(type) {
      case 'shield':
        return 'https://prod.spline.design/6k804mHSWxPeHRpJ/scene.splinecode';
      default:
        return 'https://prod.spline.design/6k804mHSWxPeHRpJ/scene.splinecode';
    }
  };
  
  return (
    <div ref={containerRef} className="spline-container rounded-2xl shadow-xl overflow-hidden">
      {isLoaded ? (
        <spline-viewer 
          url={getModelUrl()}
          loading-anim={isMobile ? "false" : "true"}
          pixel-ratio={isMobile ? "1" : "2"}
          rendering-scale={isMobile ? "0.5" : "1"}
        ></spline-viewer>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="animate-pulse flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Loading 3D Model...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDModel;
