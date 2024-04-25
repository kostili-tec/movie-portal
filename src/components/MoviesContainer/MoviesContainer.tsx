import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { useFindMoviesQuery } from '../../services/OMDbAPIService';
import { MovieCardMemo } from '../MovieCard/MovieCard';
import { classNames } from '../../shared/lib/classNames';
import Pagination from '../Pagination/Pagination';
import { setCatalog } from '../../store/reducers/CatalogSlice';
import classes from './MoviesContainer.module.scss';

const MoviesContainer = () => {
  const dispatch = useAppDispatch();
  const { apiKey } = useAppSelector((state) => state.userReducer);
  const catalogState = useAppSelector((state) => state.catalogReducer);
  const { page, searchTerm } = catalogState;
  const { data, isFetching } = useFindMoviesQuery({ apiKey, searchTerm, page });

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (!data.totalResults) {
    return <div>No movies</div>;
  }
  const handleClickPagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e.currentTarget.value;
    if (Number(buttonValue)) {
      dispatch(setCatalog({ ...catalogState, page: Number(buttonValue) }));
    }
  };

  return (
    <div className={classNames('', {}, [classes.movieContainer])}>
      <div className={classNames('', {}, [classes.moviesList])}>
        {data.Search.map((movie) => (
          <MovieCardMemo {...movie} key={movie.imdbID} />
        ))}
      </div>
      <Pagination
        count={Number(data.totalResults)}
        indent={2}
        limit={10}
        page={page}
        onClick={handleClickPagination}
      />
    </div>
  );
};

export default MoviesContainer;
