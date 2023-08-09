import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";
import signUpReducer from "./reducers/signUpReducer";
import signInReducer from "./reducers/signInReducer";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  posts: postSlice,
  signUpForm: signUpReducer,
  signIn: signInReducer,
});

const store = configureStore({
  reducer: rootReducer,
  })
  
export default store;