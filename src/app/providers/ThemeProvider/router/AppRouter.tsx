import React, { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from './config/routeConfig';
import CustomRoute from './CustomRoute';
import PageLoader from '../../../../widgets/PageLoader/PageLoader';

const AppRouter = () => {
  const callbackRender = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.privateFor ? (
            <CustomRoute privateFor={route.privateFor}>{element}</CustomRoute>
          ) : (
            element
          )
        }
      />
    );
  }, []);
  return <Routes>{Object.values(routeConfig).map(callbackRender)}</Routes>;
};

export default memo(AppRouter);
