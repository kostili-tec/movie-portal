import { getFavorites } from '../../shared/lib/favorites';
import { MovieCardMemo } from '../../components/MovieCard/MovieCard';
import { classNames } from '../../shared/lib/classNames';

const FavoritesPage = () => {
  const favMovies = getFavorites();
  if (!favMovies || favMovies.length === 0) {
    return <div>No favorites</div>;
  }

  return (
    <div className="">
      <div className={classNames('movies-list')}>
        {favMovies.map((movie) => (
          <MovieCardMemo {...movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
