import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from '../widgets/Header/Header';
// import './App.css';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import './styles/index.scss';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
     
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
