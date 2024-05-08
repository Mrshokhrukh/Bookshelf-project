import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../db/api";

export const registerAPI = createApi({
  reducerPath: "registerAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  endpoints: (data) => ({
    signup: data.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userData,
      }),
    }),
    login: data.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userData,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = registerAPI;
