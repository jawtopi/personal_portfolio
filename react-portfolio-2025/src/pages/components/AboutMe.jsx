import React from 'react';
import me from '../images/me.jpeg';

const AboutMe = ({ isDarkMode }) => {
  return (
    <div className="p-8 pr-16">
      <h1 className="text-4xl pb-8"> About Me </h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
        <img src={me} alt="me" className="w-72 h-auto rounded-sm shadow-2xl" />
        <div className="sm:pl-8 pt-4 sm:pt-0">
          <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            Jason Lee
          </h1>
          <p className={`${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}> jawtopi@berkeley.edu </p>
          <p className={`pt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Hi! I’m Jason. I'm an international student from New Zealand studying CS & Math @ UC Berkeley.
          </p>
          <p className={`pt-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            I’m passionate about creating impactful software solutions, with experience ranging from building optimized algorithms
            for drone reforestation to designing scalable learning tools. I'm also extremely passionate about education, with 8+ years of teaching experience. For the past two years, I've been running NEWGEN, a high-school education company based in New Zealand.
          </p>
          <p className={`pt-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            I’m particularly interested in software engineering that bridges innovation and real-world impact, including fields like machine learning, secure systems, and full-stack development. Outside of work, I enjoy hiking, judo, and exploring new tech ideas. Let’s connect to collaborate or share insights!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
