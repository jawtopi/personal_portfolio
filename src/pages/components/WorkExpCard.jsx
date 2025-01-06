import React from 'react';

const WorkExpCard = ({ title, company, location, date, responsibilities, logo, isDarkMode }) => {
  return (
    <div
      className={`p-6 rounded-lg mb-4 ${
        isDarkMode ? 'bg-[#3a393f] text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="flex items-center mb-2">
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
