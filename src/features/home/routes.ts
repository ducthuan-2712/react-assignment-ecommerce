import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));

const Routing = {
  HOME: { path: '/home', component: HomePage, exact: true, isPrivate: false },
};

export default Routing;
