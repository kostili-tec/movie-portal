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
  }),
});

export const { useGetMoviesQuery } = OMDbAPI;
