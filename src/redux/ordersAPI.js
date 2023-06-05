import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../baseURL";

export const ordersAPI = createApi({
  reducerPath: "ordersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["orders"],

  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/api/orders",
        method: "POST",
        body: data,
      }),
      providesTags: ["orders"],
    }),

    getOrdersByUser: builder.query({
      query: ({ email, phone }) => ({
        url: "api/orders",
        params: { email, phone },
      }),
      providesTags: ["orders"],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrdersByUserQuery,
  useLazyGetOrdersByUserQuery,
} = ordersAPI;
