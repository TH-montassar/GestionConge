// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth.reducer";

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
