
import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
export const rehydrateAuthState = createAction('auth/rehydrate');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    token: null,
    showSignIn: true,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
    },
    toggleShowSignIn: (state) => {
      state.showSignIn = !state.showSignIn
    }
  },
});

export const { setUsername, setToken, logout, toggleShowSignIn } = authSlice.actions;
export default authSlice.reducer;
