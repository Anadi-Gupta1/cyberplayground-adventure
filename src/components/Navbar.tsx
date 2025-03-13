
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold flex items-center gap-2"
        >
          <span className="text-cyber-blue">Cyber</span>
          <span className="text-cyber-purple">Verse</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Features', 'Workshops', 'Events', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-sm text-gray-700 hover:text-cyber-blue transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a 
            href="#join" 
            className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg transition-shadow duration-200"
          >
            Join Now
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 bg-gray-800 transition-all duration-300 ease-out",
              mobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-gray-800 transition-all duration-300 ease-out",
              mobileMenuOpen ? "opacity-0" : "w-4 opacity-100"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-gray-800 transition-all duration-300 ease-out",
              mobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
            )}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out origin-top",
        mobileMenuOpen 
          ? "opacity-100 scale-y-100 translate-y-0" 
          : "opacity-0 scale-y-0 -translate-y-10 pointer-events-none"
      )}>
        <div className="flex flex-col py-5 px-6">
          {['About', 'Features', 'Workshops', 'Events', 'Contact'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-3 text-gray-700 hover:text-cyber-blue transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item}
            </a>
          ))}
          <a 
            href="#join" 
            className="mt-4 px-5 py-3 rounded-full text-center text-white bg-gradient-to-r from-cyber-blue to-cyber-purple"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
