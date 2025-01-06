import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleExperience = () => setIsExperienceOpen(!isExperienceOpen);
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);

  const ArrowIcon = ({ isOpen }) => (
    <svg
      className={`w-4 h-4 transform transition-transform duration-300 ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className="relative">
      {/* hamburger button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 block lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-gray-200"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* dropdown menu for small screens */}
      {isSidebarOpen && (
        <div className="absolute top-16 left-4 bg-gray-50 w-56 border border-gray-200 rounded-lg shadow-lg z-40 lg:hidden">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about-me"
                  className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
                >
                  Education
                </NavLink>
              </li>
              {/* experiences */}
              <li>
                <button
                  onClick={toggleExperience}
                  className="flex justify-between items-center w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
                >
                  Experience
                  <ArrowIcon isOpen={isExperienceOpen} />
                </button>
                {isExperienceOpen && (
                  <ul className="pl-4 space-y-1 mt-1">
                    <li>
                      <NavLink
                        to="/work-experience"
                        className="block text-gray-700 text-sm hover:text-blue-600 transition"
                      >
                        Work Experience
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/research-experience"
                        className="block text-gray-700 text-sm hover:text-blue-600 transition"
                      >
                        Research
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              {/* projects */}
              <li>
                <button
                  onClick={toggleProjects}
                  className="flex justify-between items-center w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
                >
                  Projects
                  <ArrowIcon isOpen={isProjectsOpen} />
                </button>
                {isProjectsOpen && (
                  <ul className="pl-4 space-y-1 mt-1">
                    <li>
                      <NavLink
                        to="/project-1"
                        className="block text-gray-700 text-sm hover:text-blue-600 transition"
                      >
                        SecureSync
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-2"
                        className="block text-gray-700 text-sm hover:text-blue-600 transition"
                      >
                        NEWGEN
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-3"
                        className="block text-gray-700 text-sm hover:text-blue-600 transition"
                      >
                        RISC-V CPU
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-3"
                        className="block text-gray-700 text-sm hover:text-blue-600 transition"
                      >
                        2D World Exploration Game
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/teaching"
                  className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
                >
                  Teaching
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* sidebar for larger screens */}
      <div className="hidden lg:block fixed inset-y-0 left-0 pl-16 bg-gray-50 h-screen border-r border-gray-200">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-medium pr-24 text-black">Jason Lee</h1>
        </div>
        <nav className="mt-12">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/about-me"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
              >
                Education
              </NavLink>
            </li>
            <li>
              <button
                onClick={toggleExperience}
                className="flex justify-between items-center w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
              >
                Experience
                <ArrowIcon isOpen={isExperienceOpen} />
              </button>
              {isExperienceOpen && (
                <ul className="pl-8 space-y-1 mt-1">
                  <li>
                    <NavLink
                      to="/work-experience"
                      className="block text-gray-700 text-sm hover:text-blue-600 transition"
                    >
                      Work Experience
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/research-experience"
                      className="block text-gray-700 text-sm hover:text-blue-600 transition"
                    >
                      Research
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={toggleProjects}
                className="flex justify-between items-center w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
              >
                Projects
                <ArrowIcon isOpen={isProjectsOpen} />
              </button>
              {isProjectsOpen && (
                <ul className="pl-8 space-y-1 mt-1">
                  <li>
                    <NavLink
                      to="/project-1"
                      className="block text-gray-700 text-sm hover:text-blue-600 transition"
                    >
                      SecureSync
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/project-2"
                      className="block text-gray-700 text-sm hover:text-blue-600 transition"
                    >
                      NEWGEN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/project-3"
                      className="block text-gray-700 text-sm hover:text-blue-600 transition"
                    >
                      RISC-V CPU
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/project-3"
                      className="block text-gray-700 text-sm hover:text-blue-600 transition"
                    >
                      2D World Exploration Game
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/teaching"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 transition"
              >
                Teaching
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
