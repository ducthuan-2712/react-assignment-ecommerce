import RouteList from 'components/RouteList';
import React from 'react';
import Routing from './routes';

function HomeModule() {
  return (
    <RouteList routes={Routing} />
  );
}

export default HomeModule;
