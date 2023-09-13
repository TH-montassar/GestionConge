import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "Redux/store";

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Define your user type here
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    REGISTER: (state, action) => {
      state = action.payload;
    },
  },
});

export const { LOGIN, REGISTER } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
