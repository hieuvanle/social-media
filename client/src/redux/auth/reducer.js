import {
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_TOKEN,
  LOG_OUT,
  AUTH,
} from "./actions";
import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
} from "../../services/Cookies";

const initialState = {
  loading: false,
  isAuth: !!getAuthToken(),
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      setAuthToken(action.token);
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    case AUTH:
      return {
        ...state,
        isAuth: action.payload,
        token: getAuthToken(),
      };
    case REGISTER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_FAIL:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOG_OUT:
      removeAuthToken();
      return {
        ...state,
        isAuth: false,
        token: null,
      };

    default:
      return state;
  }
}
