import { getAuthToken } from "../../services/Cookies";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const SET_TOKEN = "SET_TOKEN";
export const LOG_OUT = "LOG_OUT";

export const AUTH = "AUTH";

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export function authentication() {
  const isAuth = !!getAuthToken();
  return {
    type: AUTH,
    payload: isAuth,
  };
}

export const register = (data) => ({
  type: REGISTER,
  data,
});

export const logout = () => ({
  type: LOG_OUT,
});
