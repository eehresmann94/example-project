import React from 'react';
import { Navigate } from 'react-router-dom';
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFoundView from "./pages/errors/NotFoundPage";

const routes= [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;