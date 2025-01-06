import React, { useRef, useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Teaching from './components/Teaching';

const MainPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(true);

  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const teachingRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingIn(false); // stop fading animation after it completes
    }, 1000); // duration of the fade-in animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col transition-colors duration-300 ${
        isDarkMode ? 'bg-[#27262b]' : 'bg-white'
      } ${isFadingIn ? 'animate-fade-in' : ''}`}
    >
      <SideBar
        isDarkMode={isDarkMode}
        refs={{
          aboutMeRef,
          educationRef,
          experienceRef,
          projectsRef,
          teachingRef,
        }}
      />
      <div className="flex-1 flex flex-col lg:pl-80">
        <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div ref={aboutMeRef}>
          <AboutMe isDarkMode={isDarkMode} />
        </div>
        <div ref={educationRef}>
          <Education isDarkMode={isDarkMode} />
        </div>
        <div ref={experienceRef}>
          <Experience isDarkMode={isDarkMode} />
        </div>
        <div ref={projectsRef}>
          <Projects isDarkMode={isDarkMode} />
        </div>
        <div ref={teachingRef}>
          <Teaching isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
