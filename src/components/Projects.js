import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "SkillSpring",
      description: "Micro-internship Gen Z platform connecting students with real-world opportunities",
      tech: ["React", "Firebase", "Node.js"],
      link: "#",
      status: "Live"
    },
    {
      name: "Tech N' Teach",
      description: "K–12 peer tutoring network fostering educational equity",
      tech: ["React", "Swift", "Firebase"],
      link: "#",
      status: "Beta"
    },
    {
      name: "DormSwap",
      description: "College student marketplace for campus essentials",
      tech: ["React Native", "Firebase", "Stripe"],
      link: "#",
      status: "MVP"
    }
  ];

  return (
    <section className="py-30 px-6 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/15 via-white to-orange-100/20"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-fluid-3xl font-black text-jeton-dark mb-6 leading-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-fluid-base text-jeton-gray max-w-2xl mx-auto">
            Building solutions that matter, one app at a time
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-fluid-sm font-bold text-jeton-orange bg-jeton-orange/10 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                  <div className="w-8 h-0.5 bg-jeton-orange"></div>
                </div>
                
                <h3 className="text-fluid-2xl font-black text-jeton-dark leading-tight">
                  {project.name}
                </h3>
                
                <p className="text-fluid-base text-jeton-gray leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-jeton-light text-jeton-dark px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-jeton-orange hover:text-red-600 font-bold transition-colors duration-200 text-fluid-base group"
                >
                  View Project
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-orange rounded-3xl p-8 h-80 flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-orange-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 glass-morphism rounded-2xl flex items-center justify-center mb-4 mx-auto animate-orange-glow">
                      <span className="text-white text-2xl font-bold">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-white font-medium">Project Preview</p>
                  </div>
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-subtle-float"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;