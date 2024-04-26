import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../shared/models/IMovie';
import { IMovieDetails } from '../shared/models/IMovieDetails';

interface MovieSearchResult {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}

interface FetchMoviesArgs {
  apiKey: string;
  searchTerm: string;
  page?: string | number;
}

interface GetMovieByIdArgs {
  apiKey: string;
  movieId: string;
}

export const OMDbAPI = createApi({
  reducerPath: 'OMDbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: (build) => ({
    getMovies: build.query<MovieSearchResult, FetchMoviesArgs>({
      query: ({ apiKey, searchTerm }) => ({
        url: `/?apikey=${apiKey}&s=${searchTerm}`,
      }),
    }),
    findMovies: build.query<MovieSearchResult, FetchMoviesArgs>({
      query: ({ apiKey, searchTerm, page }) => ({
        url: `/?apikey=${apiKey}&s=${searchTerm}&page=${page}`,
      }),
    }),
    getMovieById: build.query<IMovieDetails, GetMovieByIdArgs>({
      query: ({ apiKey, movieId }) => ({
        url: `/?apikey=${apiKey}&i=${movieId}`,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useFindMoviesQuery, useGetMovieByIdQuery } = OMDbAPI;
