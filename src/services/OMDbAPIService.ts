import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../shared/models/IMovie';

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

export const OMDbAPI = createApi({
  reducerPath: 'OMDbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com' }),
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
  }),
});

export const { useGetMoviesQuery, useFindMoviesQuery } = OMDbAPI;
