
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Features', path: '#features' },
    { name: 'Workshops', path: '#workshops' },
    { name: 'Events', path: '#events' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled 
          ? "py-3 dark:bg-gray-900/80 bg-white/80 backdrop-blur-lg shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold flex items-center gap-2 animated-underline"
        >
          <span className="text-cyber-blue neon-text">Cyber</span>
          <span className="text-cyber-purple neon-text-purple">Verse</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
              className="font-medium text-sm dark:text-gray-300 text-gray-700 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors duration-200 animated-underline"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#join" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#join');
            }}
            className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-200"
          >
            Join Now
          </a>
          <ThemeToggle />
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={cn(
                "block h-0.5 dark:bg-gray-300 bg-gray-800 transition-all duration-300 ease-out",
                mobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
              )}></span>
              <span className={cn(
                "block h-0.5 dark:bg-gray-300 bg-gray-800 transition-all duration-300 ease-out",
                mobileMenuOpen ? "opacity-0" : "w-4 opacity-100"
              )}></span>
              <span className={cn(
                "block h-0.5 dark:bg-gray-300 bg-gray-800 transition-all duration-300 ease-out",
                mobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
              )}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "absolute top-full left-0 right-0 dark:bg-gray-900/95 bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out origin-top",
        mobileMenuOpen 
          ? "opacity-100 scale-y-100 translate-y-0" 
          : "opacity-0 scale-y-0 -translate-y-10 pointer-events-none"
      )}>
        <div className="flex flex-col py-5 px-6">
          {navLinks.map((item, i) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
              className="py-3 dark:text-gray-300 text-gray-700 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#join" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#join');
            }}
            className="mt-4 px-5 py-3 rounded-full text-center text-white bg-gradient-to-r from-cyber-blue to-cyber-purple"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
