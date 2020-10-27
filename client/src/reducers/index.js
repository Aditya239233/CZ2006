import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import alert from "./alert";
import profileReducer from "./recommendReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alert: alert,
  profile: profileReducer,
});
