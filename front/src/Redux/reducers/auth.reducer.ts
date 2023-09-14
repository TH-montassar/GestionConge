import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../Redux/action/auth.action";

interface AuthState {
  isAuthenticated: boolean;
  user: object | null; // Define your user type here
  pending: boolean | null;
  error: null | string | undefined;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: { email: "", password: "", userName: "" },
  pending: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.pending = null;
      state.error = action.error.message;
    });
  },
});

//export const { LOGIN, REGISTER } = authSlice.actions;

//export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
