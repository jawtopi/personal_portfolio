import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkExpCard = ({ title, company, location, date, responsibilities, logo, isDarkMode, filePath }) => {
  return (
    <div
      className={`p-6 rounded-lg mb-4 ${
        isDarkMode ? 'bg-[#3a393f] text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-auto h-12 rounded-lg mr-4"
            />
          )}
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
        </div>
        <NavLink
          to={filePath}
          className={`text-m font-medium ${
            isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
          }`}
        >
          Learn More
        </NavLink>
      </div>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {company} • {location}
      </p>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{date}</p>
      <ul className={`mt-4 list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExpCard;
