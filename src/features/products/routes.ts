import React from 'react';

const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

const Routing = {
  PRODUCT_DETAIL: { path: '/products/:id', component: ProductDetail, exact: true, isPrivate: false },
};

export default Routing;
