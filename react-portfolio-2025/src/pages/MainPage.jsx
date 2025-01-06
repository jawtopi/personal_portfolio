import React from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';


const MainPage = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
      </div>
    </div>
  );
}

export default MainPage
