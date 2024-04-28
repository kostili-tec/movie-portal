import { useEffect } from 'react';
import { useAppDispatch } from '../shared/hooks/redux';
import { checkAuth } from '../store/reducers/ActionsUser';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import Header from '../widgets/Header/Header';
import AppRouter from './providers/ThemeProvider/router/AppRouter';
import './styles/index.scss';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Header />
      <main className={classNames('main')}>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
