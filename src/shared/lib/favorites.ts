import { IMovieDetails } from '../models/IMovieDetails';

export const getFavorites = (): IMovieDetails[] => JSON.parse(localStorage.getItem('favorites')) || [];

export const checkIsFavorite = (id: string) => {
  const favorites = getFavorites();
  if (favorites) {
    return favorites.some((movie) => movie.imdbID === id);
  }
  return false;
};

export const addToFavorites = (movie: IMovieDetails) => {
  const favorites = getFavorites();
  if (!favorites) {
    localStorage.setItem('favorites', JSON.stringify([movie]));
  } else {
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (movie: IMovieDetails) => {
  const favorites = getFavorites();
  const filteredFavorites = favorites.filter((favMovie) => favMovie.imdbID !== movie.imdbID);
  localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
};

export const chunkArray = <T>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );
