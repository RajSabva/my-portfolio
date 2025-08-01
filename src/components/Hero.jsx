import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Raj Sabva
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            Frontend Developer & IT Student
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-xl">
            Passionate about creating responsive and interactive web applications using modern 
            technologies. Currently pursuing B.Tech in Information Technology at Gandhinagar 
            Institute of Technology with a CGPA of 9.20.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/20"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-400 rounded-lg font-medium hover:bg-indigo-600/20 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
              <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                <div className="bg-gray-700 w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center">
                  <span className="text-7xl font-bold text-indigo-500"><img className='w-90 scale-120' src='/raj.jpeg'></img></span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gray-800 px-4 py-2 rounded-lg border border-indigo-500/50 shadow-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for Internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;