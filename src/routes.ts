import React from 'react';

const HomeModule = React.lazy(() => import('features/home'));
const ProductsModule = React.lazy(() => import('features/products'));
const AboutModule = React.lazy(() => import('features/static-pages/about'));
const ContactModule = React.lazy(() => import('features/static-pages/contact'));
const LoginModule = React.lazy(() => import('features/workflows'));

const Routing = {
  HOME: {
    path: '/home',
    component: HomeModule,
    exact: false,
    isPrivate: true,
    name: 'Home',
  },
  PRODUCTS: {
    path: '/products',
    component: ProductsModule,
    exact: false,
    isPrivate: true,
    name: 'Products',
  },
  ABOUT: {
    path: '/about-us',
    component: AboutModule,
    exact: true,
    isPrivate: true,
    name: 'About',
  },
  CONTACT: {
    path: '/contact-us',
    component: ContactModule,
    exact: true,
    isPrivate: true,
    name: 'Contact',
  },

  // Workflows
  // - Success Login: It's handle callback from backend and update token to local storage
  LOGIN: {
    path: '/login',
    component: LoginModule,
    exact: true,
    isPrivate: false,
    name: 'Login',
  },
};

export default Routing;
