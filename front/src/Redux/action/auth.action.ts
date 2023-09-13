import { instance } from "../../apis/api.instance";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { authSlice } from "../reducers/auth.reducer";
interface User {
  email: string;
  password: string;
  // Add other user properties as needed
}
interface ApiData {
  email: string;
  password: string;
  // You may add other properties if your API returns additional data upon successful login
}
export const loginUser = (user: User) => async (dispatch: Dispatch) => {
  try {
    const { data } = await instance.post<ApiData>("/api/auth/login", user);
    dispatch(authSlice.actions.LOGIN(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
