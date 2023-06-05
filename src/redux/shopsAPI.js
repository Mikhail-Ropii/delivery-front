import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../baseURL";

export const shopsAPI = createApi({
  reducerPath: "shopsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["shops"],

  endpoints: (builder) => ({
    getShopsList: builder.query({
      query: () => ({
        url: "/api/shops",
        method: "GET",
      }),
      providesTags: ["shops"],
    }),

    getProductsByShopId: builder.query({
      query: (id) => ({
        url: `/api/shops/${id}`,
        method: "GET",
      }),
      providesTags: ["shops"],
    }),
  }),
});

export const {
  useGetShopsListQuery,
  useGetProductsByShopIdQuery,
  useLazyGetProductsByShopIdQuery,
} = shopsAPI;
