import { useAppSelector } from '../../shared/hooks/redux';
import { useGetMoviesQuery } from '../../services/OMDbAPIService';
import { MovieCardMemo } from '../MovieCard/MovieCard';
import { classNames } from '../../shared/lib/classNames';
import classes from './MoviesContainer.module.scss';

const MoviesContainer = () => {
  const { apiKey } = useAppSelector((state) => state.userReducser);
  const searchTerm = 'star wars';
  const { data } = useGetMoviesQuery({ apiKey, searchTerm });
  console.log(data);

  return (
    <div className={classNames('', {}, [classes.movieContainer])}>
      {data && data.Search.map((movie) => <MovieCardMemo {...movie} key={movie.imdbID} />)}
    </div>
  );
};

export default MoviesContainer;
