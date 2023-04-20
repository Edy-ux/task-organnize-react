import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const userApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (name) => `user`
    })
  })
});

/* Fatiar query, ler depois a documentação do RTK query*/
export const { useGetAllQuery } = userApi;
export default api;
