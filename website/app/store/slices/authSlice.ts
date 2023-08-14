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
      console.log(state)
      state.showSignIn = !state.showSignIn
    }
  }
});
export const { setUsername, setToken, logout, toggleShowSignIn } = authReducer.actions;
export default authReducer.reducer;
