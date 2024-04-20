import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from '../widgets/Header/Header';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { checkAuth } from '../store/reducers/ActionsUser';
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux';
import LoginPage from '../pages/LoginPage/LoginPage';
import './styles/index.scss';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  const { isAuth } = useAppSelector((state) => state.userReducser);
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign_up" element={isAuth ? <Navigate to="/" /> : <SignUpPage />} />
        <Route path="/login" element={isAuth ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
