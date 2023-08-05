import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { TODO_TAG } from './tags';

export const baseApi = createApi({
  tagTypes: [TODO_TAG],
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});
