import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Signin from './pages/Signin';
import Add from './pages/Add';
import View from './pages/View';
import ProtectedRoute from './components/ProtectedRoute';

import { BACKEND_URL } from './config';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin/>, // Pass the login function as a prop
  },
  {
    path: '/add',
    element: (
      <ProtectedRoute role="user">
        <Add />
      </ProtectedRoute>
    ),
  },
  {
    path: '/view',
    element: (
      <ProtectedRoute role="doctor">
        <View />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals.console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
