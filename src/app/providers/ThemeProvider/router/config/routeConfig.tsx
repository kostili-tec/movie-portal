import { RouteProps } from 'react-router-dom';
import MainPage from '../../../../../pages/MainPage/MainPage';
import SignUpPage from '../../../../../pages/SignUpPage/SignUpPage';
import LoginPage from '../../../../../pages/LoginPage/LoginPage';
import ProfilePage from '../../../../../pages/ProfilePage/ProfilePage';
import NotFoundPage from '../../../../../pages/NotFoundPage/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  SIGN_UP = 'sign_up',
  LOGIN = 'login',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.SIGN_UP]: '/sign_up',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};

enum Private {
  FOR_USER = 'for_user',
  FOR_GUEST = 'for_guest',
}

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  privateFor?: Private;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.SIGN_UP]: {
    path: RoutePath.sign_up,
    element: <SignUpPage />,
    privateFor: Private.FOR_USER,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
    privateFor: Private.FOR_USER,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    privateFor: Private.FOR_GUEST,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
