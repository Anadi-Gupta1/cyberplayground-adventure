
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-base uppercase font-semibold tracking-wide text-cyber-blue">Get In Touch</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold">Ready to Hack the Future?</h3>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Join CyberVerse and be part of LNCT's pioneering cybersecurity community.
            </p>
          </div>
          
          <div className="fade-in-section bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 mb-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Tell us what you're interested in..."
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="fade-in-section text-center">
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-2">Other ways to reach us</h4>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="mailto:versec86@gmail.com" 
                  className="flex items-center px-5 py-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  versec86@gmail.com
                </a>
                <a 
                  href="https://linktr.ee/CyberVerse.0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-5 py-3 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  linktr.ee/CyberVerse.0
                </a>
              </div>
            </div>
            
            <div className="text-gray-600 text-sm">
              <p>© 2023 CyberVerse LNCT. All rights reserved.</p>
              <p className="mt-1">#CyberVerseLNCT | #HackToProtect | #CyberSecForAll | #EthicalChaos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
