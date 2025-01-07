import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import ExpNike from './pages/ExpNike';
import MainLayout from './Layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="mainpage" element={<MainPage />} />
      <Route path="mainpage/nike" element={<ExpNike/>} />
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
