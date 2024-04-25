import React from 'react';
// import { Private } from './config/routeConfig';
import { useAppSelector } from '../../../../shared/hooks/redux';

/* interface PrivateRouteProps {
  children: JSX.Element;
  privateFor: Private;
} */

const PrivateRoute = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  return <div />;
};

export default PrivateRoute;
