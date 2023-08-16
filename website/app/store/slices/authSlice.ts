import { createSlice } from '@reduxjs/toolkit';

const authReducer= createSlice({
  name: 'auth',
  initialState: {
    username: null,
    token: null,
    showSignIn: true,
  },
  reducers: {
    setUsername: (state, action) => {
      console.log('Before set name:', state.username);
      state.username = action.payload;
      console.log('After set name:', state.username);
    },
    setToken: (state, action) => {
      console.log('Before setting token:', state.token);
      state.token = action.payload;
      console.log('After setting token:', state.token);
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
      localStorage.clear()
    },
    toggleShowSignIn: (state) => {
      console.log('Before toggle:', state.showSignIn);
      state.showSignIn = !state.showSignIn
      console.log('After toggle:', state.showSignIn);
    }
  }
});
export const { setUsername, setToken, logout, toggleShowSignIn } = authReducer.actions;
export default authReducer.reducer;
