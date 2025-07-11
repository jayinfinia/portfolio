import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="relative z-10">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-black text-jeton-dark mb-6 leading-[0.8] tracking-tight">
                Build.<br/>
                Learn.<br/>
                <span className="bg-gradient-orange bg-clip-text text-transparent">
                  Grow.
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-orange mb-8 rounded-full"></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-jeton-gray mb-12 font-medium leading-relaxed">
              I'm Jay, an engineer building tools that empower students and communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-orange hover:bg-gradient-orange-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-orange-glow">
                <span className="flex items-center justify-center">
                  See My Work
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="group glass-morphism hover:glass-morphism-dark text-jeton-dark hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-500 border border-white/20 hover:border-jeton-orange">
                Download Resume
              </button>
            </div>
          </div>
          
          {/* Right side - 3D UVA */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="text-3d-uva animate-3d select-none">
              UVA
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-orange rounded-full animate-subtle-float opacity-30"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-orange-light rounded-full animate-subtle-float opacity-25" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-orange-dark rounded-full animate-subtle-float opacity-35" style={{ animationDelay: '4s' }}></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-jeton-orange rounded-full flex justify-center glass-morphism">
          <div className="w-1 h-3 bg-gradient-orange rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;