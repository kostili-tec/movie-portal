import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { useFindMoviesQuery } from '../../services/OMDbAPIService';
import { MovieCardMemo } from '../MovieCard/MovieCard';
import { classNames } from '../../shared/lib/classNames';
import Pagination from '../Pagination/Pagination';
import { setCatalog } from '../../store/reducers/CatalogSlice';
import classes from './MoviesContainer.module.scss';
import PageLoader from '../../widgets/PageLoader/PageLoader';

const MoviesContainer = () => {
  const dispatch = useAppDispatch();
  const catalogState = useAppSelector((state) => state.catalogReducer);
  const { page, searchTerm, type, year } = catalogState;
  const { data, isFetching } = useFindMoviesQuery({ searchTerm, page, type, year });

  if (isFetching) {
    return <PageLoader />;
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
