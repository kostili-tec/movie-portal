import { RouteProps } from 'react-router-dom';
import MainPage from '../../../../../pages/MainPage/MainPage';
import SignUpPage from '../../../../../pages/SignUpPage/SignUpPage';
import LoginPage from '../../../../../pages/LoginPage/LoginPage';
import NotFoundPage from '../../../../../pages/NotFoundPage/NotFoundPage';
import FavoritesPage from '../../../../../pages/FavoritesPage/FavoritesPage';
import MoviePage from '../../../../../pages/MoviePage/MoviePage';

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
