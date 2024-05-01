import { IMovieDetails } from '../models/IMovieDetails';

const LSFavKey = 'favorites';

export const getFavorites = (login: string): IMovieDetails[] =>
  JSON.parse(localStorage.getItem(`${login}-${LSFavKey}`)) || [];

export const checkIsFavorite = (login: string, id: string) => {
  const favorites = getFavorites(login);
  if (favorites) {
    return favorites.some((movie) => movie.imdbID === id);
  }
  return false;
};

export const addToFavorites = (login: string, movie: IMovieDetails) => {
  const favorites = getFavorites(login);
  if (!favorites) {
    localStorage.setItem(`${login}-${LSFavKey}`, JSON.stringify([movie]));
  } else {
    favorites.push(movie);
    localStorage.setItem(`${login}-${LSFavKey}`, JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (login: string, movie: IMovieDetails) => {
  const favorites = getFavorites(login);
  const filteredFavorites = favorites.filter((favMovie) => favMovie.imdbID !== movie.imdbID);
  localStorage.setItem(`${login}-${LSFavKey}`, JSON.stringify(filteredFavorites));
};

export const chunkArray = <T>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );
