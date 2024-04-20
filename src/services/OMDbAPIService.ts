import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const OMDbAPI = createApi({
  reducerPath: 'OMDbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com' }),
  endpoints: (build) => ({
    fetchMovies: build.query({
      query: () => ({
        url: '/s=inception',
      }),
    }),
  }),
});
