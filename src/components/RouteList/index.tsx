import PrivateRoute from 'components/PrivateRoute';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
const Page404Module = React.lazy(() => import('components/Page404'));

type TypeRouteList = { routes: any } & typeof defaultProps;
const defaultProps = {
  routes: {},
};

const RouteList: React.FC<TypeRouteList> = ({ routes }) => {
  const routeList = Object.keys(routes).map((key) => routes[key]);
  if (routeList.length === 0) return null;

  return (
    <Switch>
      {routeList.map((route) =>
        route.isPrivate ? (
          <PrivateRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ) : (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        )
      )}
      <Route component={Page404Module} />
    </Switch>
  );
}

export default RouteList;
