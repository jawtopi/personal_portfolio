import React from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Teaching from './components/Teaching';


const MainPage = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col lg:pl-80">
        <Header />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Teaching />
      </div>
    </div>
  );
}

export default MainPage
