import { createBrowserRouter, Navigate } from 'react-router';

import ShopLayout from './shop/layouts/ShopLayout';
import HomePage from './shop/layouts/pages/home/HomePage';
import ProductPage from './shop/layouts/pages/product/ProductPage';
import GenderPage from './shop/layouts/pages/gender/GenderPage';
import LoginPage from './auth/pages/login/LoginPage';
import RegisterPage from './auth/pages/register/RegisterPage';
import DashboardPage from './admin/pages/dashboard/DashboardPage';
import AdminProductsPage from './admin/pages/AdminProducts/AdminProductsPage';
import AdminProductPage from './admin/pages/Adminproduct/AdminProductPage';
import { lazy } from 'react';

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
  // Main Routes
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/product/:idSlug',
        element: <ProductPage />,
      },
      {
        path: '/gender/:gender',
        element: <GenderPage />,
      },
    ],
    // AuthRoutes
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  // Admin Routes
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'products',
        element: <AdminProductsPage />,
      },
      {
        path: 'product/:id',
        element: <AdminProductPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
