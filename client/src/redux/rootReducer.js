import { combineReducers } from "redux";

import postReducer from "./posts/reducers";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  postState: postReducer,
  authState: authReducer,
});

export default rootReducer;
