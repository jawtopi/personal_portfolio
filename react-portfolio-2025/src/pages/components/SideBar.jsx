import React, { useState } from 'react';

const Sidebar = ({ isDarkMode, refs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleExperience = () => setIsExperienceOpen((prev) => !prev);
  const toggleProjects = () => setIsProjectsOpen((prev) => !prev);

  const handleScrollToSection = (ref) => {
    setIsSidebarOpen(false); // Close the sidebar on smaller screens
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
      {/* Hamburger button for small screens */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 left-4 z-50 block lg:hidden p-2 rounded-md focus:outline-none ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
        }`}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Dropdown menu for small screens */}
      {isSidebarOpen && (
        <div
          className={`absolute top-16 left-4 bg-gray-50 w-56 border rounded-lg shadow-lg z-40 lg:hidden ${
            isDarkMode ? 'bg-[#27262B] text-gray-300 border-gray-600' : 'bg-gray-50 text-black border-gray-200'
          }`}
        >
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollToSection(refs.aboutMeRef)}
                  className={`block px-4 py-2 text-sm ${
                    isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                  } transition`}
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection(refs.educationRef)}
                  className={`block px-4 py-2 text-sm ${
                    isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                  } transition`}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={toggleExperience}
                  className={`flex justify-between items-center w-full text-left px-4 py-2 text-sm ${
                    isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                  } transition`}
                >
                  Experience
                  <ArrowIcon isOpen={isExperienceOpen} />
                </button>
                {isExperienceOpen && (
                  <ul className="pl-4 space-y-1 mt-1">
                    <li>
                      <button
                        onClick={() => handleScrollToSection(refs.experienceRef)}
                        className={`block text-sm ${
                          isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                        } transition`}
                      >
                        Work Experience
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollToSection(refs.experienceRef)}
                        className={`block text-sm ${
                          isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                        } transition`}
                      >
                        Research
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={toggleProjects}
                  className={`flex justify-between items-center w-full text-left px-4 py-2 text-sm ${
                    isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                  } transition`}
                >
                  Projects
                  <ArrowIcon isOpen={isProjectsOpen} />
                </button>
                {isProjectsOpen && (
                  <ul className="pl-4 space-y-1 mt-1">
                    <li>
                      <button
                        onClick={() => handleScrollToSection(refs.projectsRef)}
                        className={`block text-sm ${
                          isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                        } transition`}
                      >
                        SecureSync
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection(refs.teachingRef)}
                  className={`block px-4 py-2 text-sm ${
                    isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                  } transition`}
                >
                  Teaching
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar for larger screens */}
      <div
        className={`hidden lg:block fixed inset-y-0 left-0 pl-16 h-screen border-r transition-colors duration-300 ${
          isDarkMode ? 'bg-[#27262B] text-gray-300 border-gray-600' : 'bg-gray-50 text-black border-gray-200'
        }`}
      >
        <div className="p-4 border-b">
          <h1 className={`text-2xl font-medium pr-24 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Jason Lee
          </h1>
        </div>
        <nav className="mt-12">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleScrollToSection(refs.aboutMeRef)}
                className={`block px-4 py-2 text-sm ${
                  isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                } transition`}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection(refs.educationRef)}
                className={`block px-4 py-2 text-sm ${
                  isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                } transition`}
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={toggleExperience}
                className={`flex justify-between items-center w-full text-left px-4 py-2 text-sm ${
                  isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                } transition`}
              >
                Experience
                <ArrowIcon isOpen={isExperienceOpen} />
              </button>
              {isExperienceOpen && (
                <ul className="pl-4 space-y-1 mt-1">
                  <li className='pl-2'>
                    <button
                      onClick={() => handleScrollToSection(refs.experienceRef)}
                      className={`block text-sm ${
                        isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                      } transition`}
                    >
                      Work Experience
                    </button>
                    <button
                      onClick={() => handleScrollToSection(refs.experienceRef)}
                      className={`block text-sm ${
                        isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                      } transition`}
                    >
                      Research
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={toggleProjects}
                className={`flex justify-between items-center w-full text-left px-4 py-2 text-sm ${
                  isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                } transition`}
              >
                Projects
                <ArrowIcon isOpen={isProjectsOpen} />
              </button>
              {isProjectsOpen && (
                <ul className="pl-4 space-y-1 mt-1">
                  <li className='pl-2'>
                    <button
                      onClick={() => handleScrollToSection(refs.projectsRef)}
                      className={`block text-sm ${
                        isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                      } transition`}
                    >
                      SecureSync
                    </button>
                    <button
                      onClick={() => handleScrollToSection(refs.projectsRef)}
                      className={`block text-sm ${
                        isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                      } transition`}
                    >
                      NEWGEN
                    </button>
                    <button
                      onClick={() => handleScrollToSection(refs.projectsRef)}
                      className={`block text-sm ${
                        isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                      } transition`}
                    >
                      RISC-V CPU
                    </button>
                    <button
                      onClick={() => handleScrollToSection(refs.projectsRef)}
                      className={`block text-sm ${
                        isDarkMode ? 'hover:text-white text-gray-300' : 'hover:text-blue-600 text-gray-700'
                      } transition`}
                    >
                      2D World Exploration Game
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection(refs.teachingRef)}
                className={`block px-4 py-2 text-sm ${
                  isDarkMode ? 'hover:bg-gray-700 text-blue-300' : 'hover:bg-gray-200 text-blue-600'
                } transition`}
              >
                Teaching
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
