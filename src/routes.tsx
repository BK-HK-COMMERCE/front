import React from 'react';
import GlobalLayout from './pages/_layout';
import Index from './pages/index';
import ProductsIndex from './pages/products/index';
import ProductIdIndex from './pages/products/[id]/index';
import CartIndex from './pages/cart/index';
import PaymentIndex from './pages/payment/index';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/products', element: <ProductsIndex />, index: true },
      { path: '/products/:id', element: <ProductIdIndex />, index: true },
      { path: '/cart', element: <CartIndex />, index: true },
      { path: '/payment', element: <PaymentIndex />, index: true },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/cart' },
  { route: '/payment' },
  { route: '/products' },
  { route: '/products/:id' },
];
