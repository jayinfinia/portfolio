import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;