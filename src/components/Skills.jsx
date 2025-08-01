import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'ReactJS', level: 85 },
    { name: 'Java', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-200">{skill.name}</span>
              <span className="text-indigo-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;