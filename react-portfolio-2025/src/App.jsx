import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<LandingPage />} />
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
