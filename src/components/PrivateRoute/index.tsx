import StorageKeys from 'constants/storage-keys';
import Routing from 'routes';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

type ApplicationsProps = {
  exact: boolean,
  path: string,
  component: any,
} & typeof defaultProps;

const defaultProps = {
  exact: false,
  path: '',
  component: null,
};

const PrivateRoute: React.FC<ApplicationsProps> = ({
  exact, path, component: Component
}) => (
  <Route
    exact={exact}
    path={path}
    render={(routeProps) => {
        // GET ACCESS_TOKEN
        const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
        if (!accessToken) {
          toast.error(`You don't have permission to access.`);
          return <Redirect to={Routing.LOGIN.path} />;
        }

      return <Component {...routeProps} />;
    }}
  />
);

export default PrivateRoute;
