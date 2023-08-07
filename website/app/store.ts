import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import signUpReducer from "./reducers/signUpReducer";
import signInReducer from "./reducers/signInReducer";
import { apiSlice } from "./api/postApiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  posts: postReducer,
  signUpForm: signUpReducer,
  signIn: signInReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),

  });

setupListeners(store.dispatch);

export default store;