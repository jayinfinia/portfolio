import React from 'react';

const About = () => {
  const techStack = [
    "Firebase", "React", "Swift", "Claude", "Cursor", "Node.js", "Tailwind CSS", "React Native"
  ];

  return (
    <section className="py-30 px-6 bg-jeton-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-fluid-3xl font-black text-jeton-dark mb-6 leading-tight">
                About Me
              </h2>
              <div className="w-16 h-0.5 bg-jeton-orange mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-fluid-lg text-jeton-gray leading-relaxed">
                <span className="text-jeton-orange font-bold">Rodman Scholar</span>, builder, and breakdancer passionate about education, community, and design.
              </p>
              
              <p className="text-fluid-base text-jeton-gray leading-relaxed">
                I'm a rising second-year engineering student at the University of Virginia, combining technical skills with a passion for social impact. When I'm not coding, you'll find me breaking, mentoring, or exploring how technology can democratize education.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-jeton-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">UVA</span>
                </div>
                <div>
                  <p className="font-bold text-jeton-dark">University of Virginia</p>
                  <p className="text-jeton-gray text-sm">Engineering Student & Rodman Scholar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-fluid-xl font-bold text-jeton-dark mb-8 leading-tight">
              Technologies I Use
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-jeton-orange hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-jeton-dark font-medium group-hover:text-jeton-orange transition-colors duration-200">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-jeton-gray text-sm leading-relaxed">
                <span className="text-jeton-orange font-semibold">Fun fact:</span> I use AI tools like Claude and Cursor to accelerate development, allowing me to focus on solving real problems rather than syntax.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;