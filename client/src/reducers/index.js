import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import message from "./sendMessageReducer";
import data from "./dataReducer";

export default combineReducers({
  alert,
  auth,
  profile,
  message,
  data,
});
