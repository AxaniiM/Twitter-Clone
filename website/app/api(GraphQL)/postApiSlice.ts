import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "postSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "protected/posts",
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "protected/addPost",
        method: "POST",
        body: newPost,
      }),
    }),
    signUp: builder.mutation({
      query: (signUpData) => ({
        url: "auth/signup",
        method: "POST",
        body: signUpData,
      })
    }),
    signIn: builder.mutation({
      query: (signInData) => ({
        url: "auth/signin",
        method: "POST",
        body: signInData,
      })
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useSignUpMutation, useSignInMutation } = apiSlice;
