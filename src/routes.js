import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './layouts';
import { Home, Login, Quiz } from './views';

const PrivateRoute = ({ component: Component }) =>
  Component ? <Component /> : <></>;

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <PrivateRoute component={() => <Home />} />
      },
      {
        path: '/login',
        element: <PrivateRoute component={() => <Login />} />
      },
      {
        path: '/quiz',
        element: <PrivateRoute component={() => <Quiz />} />
      },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
