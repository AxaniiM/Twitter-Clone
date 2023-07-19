import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import signUpReducer from "./reducers/signUpReducer";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  posts: postReducer,
  signUpForm: signUpReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;