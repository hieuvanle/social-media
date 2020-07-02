import Cookies from "js-cookie";

export const setAuthToken = (token) => {
  return Cookies.set("token", token);
};

export const getAuthToken = () => {
  return Cookies.get("token");
};

export const removeAuthToken = () => {
  return Cookies.remove("token");
};
