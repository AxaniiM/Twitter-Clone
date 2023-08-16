'use client'
import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import signUpReducer from "./reducers/signUpReducer";
import signInReducer from "./reducers/signInReducer";
import authSlice from "./slices/authSlice";
import storage from 'redux-persist/lib/storage';
import { PersistPartial } from "redux-persist/es/persistReducer";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



// RootState type to include persisted state
export type RootState = ReturnType<typeof rootReducer> & PersistPartial;

const persistConfig = {
  key: 'signData',
  storage,
  whitelist: ['auth'],// only the 'auth' reducer in persisted state
};

// Combine reducers
const rootReducer = combineReducers({
  posts: postSlice,
  signUpForm: signUpReducer,
  signIn: signInReducer,
  auth: authSlice,

});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
})
})

export default store;
