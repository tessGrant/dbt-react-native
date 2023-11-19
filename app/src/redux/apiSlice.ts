import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Profile, Repo } from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/users/',
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<Repo[], void>({
      query: () => ({
        url: 'bmizerany/repos',
        method: 'GET',
      }),
    }),
    getProfile: builder.query<Profile, void>({
      query: () => 'bmizerany',
    }),
  }),
});

export const { useGetReposQuery, useGetProfileQuery } = api;
