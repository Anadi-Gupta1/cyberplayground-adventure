
import React, { useEffect, useRef, useState } from 'react';

interface ThreeDModelProps {
  type: 'shield' | 'custom';
  url?: string;
}

declare global {
  // This tells TypeScript that spline-viewer is a valid HTML element
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        'loading-anim'?: string;
        'pixel-ratio'?: string;
        'rendering-scale'?: string;
        'auto-rotate'?: string;
        'animation-name'?: string;
      };
    }
  }
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ type, url }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
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
        console.log('Spline Viewer script loaded');
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
          viewer.setAttribute('auto-rotate', 'true');
        } else {
          // Default quality for desktop
          viewer.setAttribute('loading-anim', 'true');
          viewer.setAttribute('pixel-ratio', '2');
          viewer.setAttribute('rendering-scale', '1');
          if (isHovering) {
            viewer.setAttribute('auto-rotate', 'true');
          } else {
            viewer.setAttribute('auto-rotate', 'false');
          }
        }
      });
    };
    
    if (isLoaded) {
      optimizeSplineForMobile();
      
      // Add event listeners to check when model is loaded
      const viewers = document.querySelectorAll('spline-viewer');
      viewers.forEach((viewer: any) => {
        viewer.addEventListener('load', () => {
          console.log('Spline model loaded');
          
          // Try to play intro animation if available
          try {
            if (viewer.currentScene && viewer.currentScene.play) {
              viewer.currentScene.play('intro');
            }
          } catch (e) {
            console.log('No intro animation found');
          }
        });
      });
    }
  }, [isLoaded, isMobile, isHovering]);
  
  // Determine which model to show
  const getModelUrl = () => {
    if (url) return url;
    
    // Use a Spline model that features a glowing cyber shield
    return 'https://prod.spline.design/6k804mHSWxPeHRpJ/scene.splinecode';
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`spline-container transform transition-all duration-500 rounded-2xl shadow-2xl overflow-hidden ${isHovering ? 'scale-105 shadow-cyber-glow' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isLoaded ? (
        <spline-viewer 
          url={getModelUrl()}
          loading-anim={isMobile ? "false" : "true"}
          pixel-ratio={isMobile ? "1" : "2"}
          rendering-scale={isMobile ? "0.5" : "1"}
          auto-rotate={isHovering || isMobile ? "true" : "false"}
        ></spline-viewer>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <div className="animate-pulse flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading 3D Model...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDModel;
