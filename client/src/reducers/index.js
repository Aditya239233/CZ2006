import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import alert from "./alert";
import profileReducer from "./recommendReducer";
import dataReducer from './dataReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alert: alert,
  profile: profileReducer,
  data: dataReducer,
});
