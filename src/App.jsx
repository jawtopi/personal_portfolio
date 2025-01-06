import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import MainLayout from './Layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="mainpage" element={<MainPage />} />
    </Route>
  ),
  {
    basename: "/personal_portfolio", // Ensures correct routing for GitHub Pages
  }
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
