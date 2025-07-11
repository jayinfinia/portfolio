import React from 'react';

const Footer = () => {
  return (
    <footer className="py-30 px-6 bg-gradient-to-br from-jeton-dark via-orange-900 to-jeton-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-fluid-3xl font-black text-white mb-6 leading-tight">
            Let's Build Something
          </h2>
          <div className="w-24 h-1 bg-gradient-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-fluid-lg text-gray-300 max-w-2xl mx-auto">
            Contact me to collaborate or connect.
          </p>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-orange rounded-full opacity-10 animate-subtle-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-orange-light rounded-full opacity-15 animate-subtle-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          <a 
            href="mailto:jay@example.com" 
            className="group glass-morphism-dark hover:bg-gradient-orange p-6 rounded-2xl border border-white/10 hover:border-jeton-orange transition-all duration-500 hover:-translate-y-2 animate-orange-glow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-jeton-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">Email</p>
                <p className="text-gray-300 text-sm">jay@example.com</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://github.com/yourusername" 
            className="group glass-morphism-dark hover:bg-gradient-orange-light p-6 rounded-2xl border border-white/10 hover:border-jeton-orange transition-all duration-500 hover:-translate-y-2 animate-orange-glow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-jeton-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">GitHub</p>
                <p className="text-gray-300 text-sm">@yourusername</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://linkedin.com/in/yourusername" 
            className="group glass-morphism-dark hover:bg-gradient-orange p-6 rounded-2xl border border-white/10 hover:border-jeton-orange transition-all duration-500 hover:-translate-y-2 animate-orange-glow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-jeton-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">LinkedIn</p>
                <p className="text-gray-300 text-sm">@yourusername</p>
              </div>
            </div>
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Jay's Portfolio. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-jeton-orange rounded-full"></div>
              <p className="text-gray-400 text-sm">Available for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;