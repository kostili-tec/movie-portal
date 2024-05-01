import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../shared/hooks/redux';
import { Private } from './config/routeConfig';

interface CustomRouteProps {
  children: JSX.Element;
  privateFor: Private;
}

const CustomRoute: FC<CustomRouteProps> = ({ children, privateFor }) => {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  if (!isAuth && privateFor === Private.FOR_GUEST) {
    return <Navigate to="/login" />;
  }
  if (isAuth && privateFor === Private.FOR_USER) {
    return <Navigate to="/" />;
  }
  return children;
};

export default CustomRoute;
