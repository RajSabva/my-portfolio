import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "React.js Intern",
      company: "SPARKS TO IDEAS, Ahmedabad",
      period: "2025",
      description: "Completed internship in React.js, gaining practical experience in building and maintaining responsive user interfaces.",
      icon: (
        <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      )
    },
    {
      title: "B.Tech in Information Technology",
      company: "Gandhinagar Institute of Technology",
      period: "2022 - 2026",
      description: "CGPA: 9.20/10",
      icon: (
        <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
      )
    },
    {
      title: "Front-End Developer Bootcamp",
      company: "Udemy, Virtual",
      period: "Sep 2024 - Oct 2024",
      description: "Completed comprehensive training covering HTML, CSS, JavaScript, and React to build responsive, interactive web applications.",
      icon: (
        <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="section-title">Experience & Education</h2>
      
      <div className="mt-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row mb-12 last:mb-0 group"
          >
            <div className="md:w-1/4 flex justify-center md:justify-end md:pr-8 mb-4 md:mb-0">
              {exp.icon}
            </div>
            
            <div className="md:w-3/4 relative">
              <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-700">
                <div className="absolute top-0 w-3 h-3 rounded-full bg-indigo-500 -left-1"></div>
              </div>
              
              <div className="ml-6 bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-3">
                  <span className="mr-4">{exp.company}</span>
                  <span className="text-sm bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;