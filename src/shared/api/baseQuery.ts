import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from 'shared/lib';

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
});
