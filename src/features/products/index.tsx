import RouteList from 'components/RouteList';
import React from 'react';
import Routing from './routes';

function ProductsModule() {
  return (
    <RouteList routes={Routing} />
  );
}

export default ProductsModule;
