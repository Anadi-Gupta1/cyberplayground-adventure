
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

const NotFound = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Animation sequence
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background animated-gradient overflow-hidden relative">
      <ParticlesBackground />
      
      <div className={`text-center max-w-md transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="glitch-container mb-8">
          <h1 className="text-8xl font-bold glitch-text" data-text="404">404</h1>
        </div>
        
        <p className="text-2xl text-gray-300 mb-6 neon-text">Page not found</p>
        <p className="text-lg text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>
        
        <a 
          href="/" 
          className="cyber-button inline-flex items-center rounded-full"
        >
          <span className="mr-2">Return Home</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyber-purple opacity-20 rounded-full blur-3xl pulse-glow"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyber-blue opacity-20 rounded-full blur-3xl pulse-glow animation-delay-300"></div>
    </div>
  );
};

export default NotFound;
