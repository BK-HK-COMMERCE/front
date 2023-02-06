import React from 'react';
import GlobalLayout from './pages/_layout';
import Index from './pages/index';
import ProductsIndex from './pages/products/index';
import ProductIdIndex from './pages/products/[id]/index';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/products', element: <ProductsIndex />, index: true },
      { path: '/products/:id', element: <ProductIdIndex />, index: true },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
];
