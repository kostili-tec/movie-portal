import { useState } from 'react';
import { chunkArray, getFavorites } from '../../shared/lib/favorites';
import { MovieCardMemo } from '../../components/MovieCard/MovieCard';
import { classNames } from '../../shared/lib/classNames';
import { IMovieDetails } from '../../shared/models/IMovieDetails';
import { useAppSelector } from '../../shared/hooks/redux';
import Pagination from '../../components/Pagination/Pagination';

interface IFavoritesState {
  page: number;
  count: number;
  favorites: IMovieDetails[][];
}

const FavoritesPage = () => {
  const { login } = useAppSelector((state) => state.userReducer);
  const favMovies = getFavorites(login);
  const pageLimit = 10;
  const [favoritesState, setFavoritesState] = useState<IFavoritesState>({
    page: 1,
    count: favMovies.length,
    favorites: chunkArray(favMovies, pageLimit),
  });

  if (!favMovies || favMovies.length === 0) {
    return <div>No favorites</div>;
  }

  const handleClickPagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = Number(e.currentTarget.value);
    if (buttonValue) {
      setFavoritesState((state) => ({ ...state, page: buttonValue }));
    }
  };

  return (
    <div className="">
      <div className={classNames('movies-list')}>
        {favoritesState.favorites[favoritesState.page - 1].map((movie) => (
          <MovieCardMemo {...movie} key={movie.imdbID} />
        ))}
      </div>
      <Pagination
        count={favoritesState.count}
        indent={2}
        limit={pageLimit}
        page={favoritesState.page}
        onClick={handleClickPagination}
      />
    </div>
  );
};

export default FavoritesPage;
