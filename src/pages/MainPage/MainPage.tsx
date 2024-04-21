import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import { useAppSelector } from '../../shared/hooks/redux';

const MainPage = () => {
  const { isAuth } = useAppSelector((state) => state.userReducser);
  return <div>{isAuth ? <MoviesContainer /> : <div>Main Page</div>}</div>;
};

export default MainPage;
