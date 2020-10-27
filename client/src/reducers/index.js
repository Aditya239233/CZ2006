import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
<<<<<<< HEAD
import alert from "./alert";
import profileReducer from "./recommendReducer";
=======
import dataReducer from './dataReducer';
>>>>>>> 0b2fc1257ce747a61d983253457ef364e05a8b2c

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
<<<<<<< HEAD
  alert: alert,
  profile: profileReducer,
=======
  data: dataReducer,
>>>>>>> 0b2fc1257ce747a61d983253457ef364e05a8b2c
});
