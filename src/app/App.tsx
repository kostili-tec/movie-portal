import { Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from '../widgets/Header/Header';

function App() {
  return (
    <div className="App">
     
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
