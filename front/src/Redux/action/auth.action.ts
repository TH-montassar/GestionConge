import { setAuthToken } from "../../utils/setAuthToken";
import { instance } from "../../apis/api.instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk("register", async (user) => {
  const res = await instance.post("/user/register", user);
  return res.data;
});

export const login = createAsyncThunk("login", async (user) => {
  const res = await instance.post("/user/login", user);
  setAuthToken(res.data.user.token);
  return res.data;
});

export const authCheck = createAsyncThunk(
  "authCheck",
  async (_, { rejectWithValue }) => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
    }
    try {
      const res = await instance.get("user/check");
      return res.data;
    } catch (error: any) {
      console.error("Error removing user info from localStorage:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
