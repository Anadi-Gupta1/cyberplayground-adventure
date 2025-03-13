
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Toast notification when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to CyberVerse!",
        description: "LNCT's first-ever cybersecurity club is now online.",
        duration: 5000,
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll animation for fade-in sections
  useEffect(() => {
    // Intersection Observer for animations
    const fadeElems = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElems.forEach(elem => {
      observer.observe(elem);
    });
    
    // Performance optimizations for 3D models
    const lazyLoadSpline = () => {
      const splineContainers = document.querySelectorAll('.spline-container');
      
      // Only load visible Spline containers to improve performance
      splineContainers.forEach(container => {
        const rect = container.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
        );
        
        if (isVisible) {
          container.classList.add('load-spline');
        }
      });
    };
    
    // Parallax effect for elements with data-parallax attribute
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const handleParallax = () => {
      parallaxElements.forEach(element => {
        const scrollY = window.scrollY;
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.1');
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    // Add scroll event listeners
    window.addEventListener('scroll', lazyLoadSpline);
    window.addEventListener('scroll', handleParallax);
    
    // Initial load check
    lazyLoadSpline();
    handleParallax();
    
    // Typing animation effect
    const typingElements = document.querySelectorAll('[data-typing]');
    typingElements.forEach((element) => {
      const text = element.textContent || '';
      element.textContent = '';
      
      const speed = parseInt(element.getAttribute('data-typing-speed') || '100');
      let i = 0;
      
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      };
      
      // Start typing when element is in viewport
      const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            typingObserver.unobserve(entry.target);
          }
        });
      });
      
      typingObserver.observe(element);
    });
    
    return () => {
      fadeElems.forEach(elem => {
        observer.unobserve(elem);
      });
      
      window.removeEventListener('scroll', lazyLoadSpline);
      window.removeEventListener('scroll', handleParallax);
      
      parallaxElements.forEach(element => {
        (element as HTMLElement).style.transform = '';
      });
    };
  }, []);
  
  // Smooth scrolling effect for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = (this as HTMLAnchorElement).getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  // Handle back to top button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div ref={pageRef} className="min-h-screen bg-background animated-gradient overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Features />
      <EventsSection />
      <ContactSection />
      
      {/* Footer with contact info */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="mailto:versec86@gmail.com" className="flex items-center gap-2 hover:text-cyber-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>versec86@gmail.com</span>
            </a>
            <span className="hidden md:block">|</span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>LNCT Campus</span>
            </span>
            <span className="hidden md:block">|</span>
            <a href="https://linktr.ee/CyberVerse.0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyber-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>linktr.ee/CyberVerse.0</span>
            </a>
          </div>
          <div className="mt-4 text-xs">
            <p className="glitch-text" data-text="#CyberVerseLNCT | #HackToProtect | #CyberSecForAll | #EthicalChaos">
              #CyberVerseLNCT | #HackToProtect | #CyberSecForAll | #EthicalChaos
            </p>
            <p className="mt-2">© {new Date().getFullYear()} CyberVerse LNCT. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gray-800 shadow-lg pulse-glow transition-all duration-300 border border-gray-700 text-gray-300"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
