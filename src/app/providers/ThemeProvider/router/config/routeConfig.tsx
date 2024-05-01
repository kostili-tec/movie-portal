import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const MainPage = lazy(() => import('../../../../../pages/MainPage/MainPage'));
const SignUpPage = lazy(() => import('../../../../../pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('../../../../../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../../../../../pages/NotFoundPage/NotFoundPage'));
const FavoritesPage = lazy(() => import('../../../../../pages/FavoritesPage/FavoritesPage'));
const MoviePage = lazy(() => import('../../../../../pages/MoviePage/MoviePage'));

export enum AppRoutes {
  MAIN = 'main',
  SIGN_UP = 'sign_up',
  LOGIN = 'login',
  FAVORITES = 'favorites',
  MOVIE = 'movie/:id',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.SIGN_UP]: '/sign_up',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.FAVORITES]: '/favorites',
  [AppRoutes.MOVIE]: '/movie/:id',
  [AppRoutes.NOT_FOUND]: '*',
};

export enum Private {
  FOR_USER = 'for_user',
  FOR_GUEST = 'for_guest',
}

export type AppRoutesProps = RouteProps & {
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
  [AppRoutes.MOVIE]: {
    path: RoutePath['movie/:id'],
    element: <MoviePage />,
    // privateFor: Private.FOR_GUEST,
  },
  [AppRoutes.FAVORITES]: {
    path: RoutePath.favorites,
    element: <FavoritesPage />,
    privateFor: Private.FOR_GUEST,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
