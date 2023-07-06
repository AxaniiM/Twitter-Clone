import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  posts: postReducer,
  // other reducers...
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;