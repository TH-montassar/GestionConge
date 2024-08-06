import { createSlice } from "@reduxjs/toolkit";
import { authCheck, login, register, logout } from "../../Redux/action/auth.action";

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
    builder.addCase(register.pending, (state) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.pending = null;
      state.error = action.error.message;
    });
    builder.addCase(authCheck.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.pending = false;
      return state;
    });
    builder.addCase(logout.fulfilled, (state) => {
      // Reset your state on logout
      return initialState;
    });
    builder.addCase(authCheck.pending, (state, action) => {
      state.pending = true;
      return state;
    });

    builder.addCase(authCheck.rejected, (state, action) => {
      state.pending = false;
      state.isAuthenticated = false;
      state.error = action.payload.message; // Access the error message from action.payload
      state.isSuccess = false;
      state.user = null;
    });
  },
});

//export const { LOGIN, REGISTER } = authSlice.actions;

//export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
