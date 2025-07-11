import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/10 via-white to-orange-100/15"></div>
      
      {/* Floating Object 1 - Large Circle */}
      <div 
        className="absolute w-64 h-64 rounded-full opacity-15"
        style={{
          background: 'linear-gradient(135deg, #f73b20 0%, #ff6b35 50%, #ff8c42 100%)',
          top: '25%',
          left: '15%',
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          filter: 'blur(40px)',
        }}
      />
      
      {/* Floating Object 2 - Medium Rectangle */}
      <div 
        className="absolute w-48 h-24 rounded-3xl opacity-12"
        style={{
          background: 'linear-gradient(45deg, #ff6b35 0%, #ff8c42 50%, #ffab5e 100%)',
          top: '65%',
          right: '20%',
          transform: `translate(${scrollY * -0.15}px, ${scrollY * 0.08}px)`,
          filter: 'blur(30px)',
        }}
      />
      
      {/* Floating Object 3 - Small Circle */}
      <div 
        className="absolute w-32 h-32 rounded-full opacity-18"
        style={{
          background: 'linear-gradient(90deg, #f73b20 0%, #ff6b35 100%)',
          top: '45%',
          right: '10%',
          transform: `translate(${scrollY * 0.12}px, ${scrollY * -0.06}px)`,
          filter: 'blur(25px)',
        }}
      />
      
      {/* Subtle floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-10"
          style={{
            background: '#f73b20',
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            transform: `translate(${scrollY * (0.05 + Math.random() * 0.1)}px, ${scrollY * (0.03 + Math.random() * 0.05)}px)`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;