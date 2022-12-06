import React from 'react';
import MainLayout from './layouts';
import { Home, Login, Quiz } from './views';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Cluba-Da-Luta',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/quiz',
        element: <Quiz />
      }
    ]
  }
];

export default routes;
