import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout.jsx';

import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Historia from './pages/Historia.jsx';
import Comunidade from './pages/Comunidade.jsx';
import Projetos from './pages/Projetos.jsx';
import Contato from './pages/Contato.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'historia', element: <Historia /> },
      { path: 'comunidade', element: <Comunidade /> },
      { path: 'projetos', element: <Projetos /> },
      { path: 'contato', element: <Contato /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
