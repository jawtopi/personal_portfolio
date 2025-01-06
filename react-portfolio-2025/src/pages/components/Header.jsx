import React from 'react';
import triangleIcon from '../icons/triangle.svg';
import darkModeIcon from '../icons/dark-mode.svg';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-5 mr-16 flex items-center justify-end">
      <div className="flex items-center space-x-6">
        <img
          src={triangleIcon}
          alt="Triangle Icon"
          className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <img
          src={darkModeIcon}
          alt="Dark Mode Icon"
          className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
    </header>
  );
};

export default Header;
