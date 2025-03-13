
import React from 'react';

const EventsSection = () => {
  const events = [
    {
      title: "Launch Event",
      date: "Coming Soon",
      description: "Join us for the official launch of CyberVerse. Get to know the team, the roadmap, and participate in our first mini CTF.",
      tags: ["Networking", "CTF", "Introduction"]
    },
    {
      title: "Workshop: Cracking Passwords",
      date: "Coming Soon",
      description: "Learn how to use John the Ripper & Hashcat to crack passwords, understand password security, and best practices.",
      tags: ["Hands-on", "Offensive Security"]
    },
    {
      title: "USB Hacking 101",
      date: "Coming Soon",
      description: "From Pendrive to Payload - Build your first BadUSB and understand how malicious USB devices work.",
      tags: ["Hardware", "Beginner-Friendly"]
    }
  ];

  return (
    <section id="events" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(112,0,255,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-base uppercase font-semibold tracking-wide text-cyber-purple">What's Happening</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold">Upcoming Events & Workshops</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for interactive workshops, competitions, and networking events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className="fade-in-section relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Decorative element */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500 opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative">
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
                  {event.date}
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-cyber-purple transition-colors duration-300">
                  {event.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {event.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <a 
            href="#join" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
          >
            Stay Updated
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
