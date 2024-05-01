import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../shared/models/IMovie';
import { IMovieDetails } from '../shared/models/IMovieDetails';

const apiKey = '3cffb84e';

interface MovieSearchResult {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}

interface FetchMoviesArgs {
  searchTerm: string;
  page?: string | number;
  type?: string;
  year?: string;
}

interface GetMovieByIdArgs {
  movieId: string;
}

export const OMDbAPI = createApi({
  reducerPath: 'OMDbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: (build) => ({
    findMovies: build.query<MovieSearchResult, FetchMoviesArgs>({
      query: ({ searchTerm, page, type, year }) => ({
        url: `/?apikey=${apiKey}&s=${searchTerm}&page=${page}&type=${type}&y=${year}`,
      }),
    }),
    getMovieById: build.query<IMovieDetails, GetMovieByIdArgs>({
      query: ({ movieId }) => ({
        url: `/?apikey=${apiKey}&i=${movieId}`,
      }),
    }),
  }),
});

export const { useFindMoviesQuery, useGetMovieByIdQuery } = OMDbAPI;
