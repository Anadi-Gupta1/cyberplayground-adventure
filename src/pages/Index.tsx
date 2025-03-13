
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
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
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
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
    
    // Initial load check
    lazyLoadSpline();
    
    // Load on scroll
    window.addEventListener('scroll', lazyLoadSpline);
    
    return () => {
      fadeElems.forEach(elem => {
        observer.unobserve(elem);
      });
      
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
      
      window.removeEventListener('scroll', lazyLoadSpline);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <EventsSection />
      <ContactSection />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
