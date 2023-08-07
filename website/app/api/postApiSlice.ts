import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "postSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/protected",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts/",
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/addPost",
        method: "POST",
        body: newPost,
      }),
    }),
    signUp: builder.mutation({
      query: (signUpData) => ({
        url: "/signup",
        method: "POST",
        body: signUpData,
      })
    }),
    signIn: builder.mutation({
      query: (signInData) => ({
        url: "/signin",
        method: "POST",
        body: signInData,
      })
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useSignUpMutation, useSignInMutation } = apiSlice;
