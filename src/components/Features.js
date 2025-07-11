import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Built With AI",
      description: "Tools like Claude, Cursor, Firebase AI help me build faster.",
      number: "01",
      gradient: "bg-gradient-orange"
    },
    {
      title: "Built For Students",
      description: "I focus on accessibility, learning, and tech equity.",
      number: "02",
      gradient: "bg-gradient-orange-light"
    },
    {
      title: "Built To Scale",
      description: "Each app is made to grow from MVP to real-world use.",
      number: "03",
      gradient: "bg-gradient-orange-dark"
    }
  ];

  return (
    <section className="py-30 px-6 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-white to-orange-100/15"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-fluid-3xl font-black text-jeton-dark mb-6 leading-tight">
            Why I Build
          </h2>
          <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative glass-morphism p-8 rounded-3xl hover:glass-morphism-dark transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 animate-subtle-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className={`absolute top-6 right-6 text-6xl font-black text-transparent bg-gradient-orange bg-clip-text group-hover:animate-orange-glow transition-all duration-300`}>
                {feature.number}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-fluid-xl font-bold text-jeton-dark group-hover:text-white mb-4 leading-tight transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-jeton-gray group-hover:text-gray-300 leading-relaxed text-fluid-base transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              <div className={`absolute bottom-0 left-0 w-full h-2 ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-orange rounded-full opacity-60 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;