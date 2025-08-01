import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Blood Bank Management System",
      description: "A responsive system built with React.js allowing users to search for blood types, request/donate blood, and find donors. Features dynamic forms and client-side routing.",
      technologies: ["React.js", "JavaScript", "CSS"],
      github: "https://github.com/RajSabva/Blood-bank-management-System",
      period: "Jun 2025 - Jul 2025"
    },
    {
      title: "Netflix Clone",
      description: "A responsive Netflix clone built with HTML and CSS, featuring a navigation bar, featured banner, and content sections with modern UI design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/RajSabva/NETFLIX",
      period: "Aug 2024 - Sep 2024"
    },
    {
      title: "Tailwind Project",
      description: "A collection of UI components and layouts built using Tailwind CSS, showcasing modern design patterns and responsive implementations.",
      technologies: ["Tailwind CSS", "HTML", "JavaScript"],
      github: "https://github.com/RajSabva/Tailwind-Project",
      period: "Oct 2024 - Nov 2024"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
                  {project.period}
                </span>
              </div>
              
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-gray-700 px-2 py-1 rounded text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;