
import React, { useEffect, useRef } from 'react';
import ThreeDModel from './ThreeDModel';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation for staggered text appearance
    const textElements = textRef.current?.querySelectorAll('.animate-stagger');
    textElements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
        el.classList.remove('opacity-0', 'translate-y-4');
      }, 200 + index * 100);
    });
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden matrix-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-800/30 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 pt-10" ref={textRef}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-gray-800/80 border border-gray-700 shadow-sm shimmer">
              <p className="text-sm text-gray-300 font-medium animate-stagger opacity-0 translate-y-4 transition-all duration-500 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 pulse-glow"></span>
                LNCT's First-Ever Cybersecurity Club
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block animate-stagger opacity-0 translate-y-4 transition-all duration-500">Join</span>
              <span className="block text-gradient-blue animate-stagger opacity-0 translate-y-4 transition-all duration-500 glitch-text" data-text="CyberVerse:">CyberVerse:</span>
              <span className="block animate-stagger opacity-0 translate-y-4 transition-all duration-500">Ultimate Security</span>
              <span className="block animate-stagger opacity-0 translate-y-4 transition-all duration-500">Playground</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl animate-stagger opacity-0 translate-y-4 transition-all duration-500">
              Whether you're a beginner or a pro, this is your space to learn, hack, and collaborate on real-world cybersecurity challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-stagger opacity-0 translate-y-4 transition-all duration-500">
              <a 
                href="#join" 
                className="cyber-button rounded-full text-center"
              >
                Join CyberVerse
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all duration-300 text-center shimmer"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* 3D Model */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative floating">
              <ThreeDModel type="shield" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce text-cyber-blue"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
