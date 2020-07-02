import jwtDecode from "jwt-decode";
import { getAuthToken } from "./Cookies";

export default function getAuthUser() {
  const decodedToken = jwtDecode(getAuthToken());
  return decodedToken;
}
