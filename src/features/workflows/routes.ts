import React from 'react';

const LoginModule = React.lazy(() => import('./pages/login'));

const Routing = {
  LOGIN: { path: '/login', component: LoginModule, exact: true, isPrivate: false },
};

export default Routing;
