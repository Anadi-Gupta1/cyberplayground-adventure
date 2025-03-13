
import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";

const Features = () => {
  // Animation on scroll
  useEffect(() => {
    const fadeElems = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });
    
    fadeElems.forEach(elem => {
      observer.observe(elem);
    });
    
    return () => {
      fadeElems.forEach(elem => {
        observer.unobserve(elem);
      });
    };
  }, []);
  
  const securityAreas = [
    {
      title: "Offensive Security",
      color: "red",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2a8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2z"></path>
          <path d="M6 11V7h12v4"></path>
          <path d="M8 14v-4h8v4"></path>
          <path d="M7 14.5h10"></path>
        </svg>
      ),
      description: "Penetration Testing, Ethical Hacking, Vulnerability Research, Bug Bounty Hunting, Exploit Development, Social Engineering",
    },
    {
      title: "Defensive Security",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        </svg>
      ),
      description: "Incident Response, Threat Hunting, SIEM/SOC Operations, Network Security, Firewalls/IDS/IPS, Digital Forensics",
    },
    {
      title: "Application Security",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
      description: "Web/Mobile App Security, IoT Security, Reverse Engineering, Secure Coding Practices, API Security",
    },
    {
      title: "Cryptography",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          <circle cx="12" cy="16" r="1"></circle>
        </svg>
      ),
      description: "Encryption Algorithms, PKI (Public Key Infrastructure), Data Privacy Laws (GDPR, DPDP), Steganography",
    },
    {
      title: "Cloud Security",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"></path>
        </svg>
      ),
      description: "AWS/Azure/GCP Security, Container Security (Docker, Kubernetes), Zero Trust Architecture, DevSecOps",
    },
    {
      title: "Emerging Tech",
      color: "red",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 0 0-2 2v4"></path>
          <path d="M5 21h4"></path>
          <path d="M15 21h4"></path>
          <path d="M21 3v4"></path>
          <path d="M19 3h-4"></path>
          <rect width="14" height="14" x="5" y="5" rx="2"></rect>
          <path d="m9 9 6 6"></path>
          <path d="m15 9-6 6"></path>
        </svg>
      ),
      description: "AI-Powered Threat Detection, Blockchain Security, OT/ICS Security (Industrial Systems), Quantum Computing Threats",
    },
  ];
  
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-base uppercase font-semibold tracking-wide text-cyber-blue">What We Cover</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold">Explore Every Corner of Cybersecurity</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            CyberVerse isn't just theory—it's a comprehensive playground for all aspects of security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityAreas.map((area, index) => (
            <div 
              key={area.title} 
              className="fade-in-section bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                area.color === "red" ? "bg-red-50 text-cyber-red" :
                area.color === "blue" ? "bg-blue-50 text-cyber-blue" :
                "bg-purple-50 text-cyber-purple"
              )}>
                {area.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{area.title}</h4>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 fade-in-section">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Get Hands-On Experience</h3>
                <p className="mb-6">
                  CyberVerse isn't just about theory—it's a playground for real hacking techniques.
                  Get your hands dirty with our practical workshops and labs.
                </p>
                <a 
                  href="#workshops" 
                  className="inline-flex items-center px-5 py-3 rounded-full bg-white text-blue-600 font-medium transition-all duration-300 hover:shadow-lg"
                >
                  View Workshops
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="w-full md:w-1/2 bg-white">
                <div className="h-full p-6">
                  <ThreeDModel type="custom" url="https://prod.spline.design/6k804mHSWxPeHRpJ/scene.splinecode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
