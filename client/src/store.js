import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);
const store = createStoreWithMiddleware(rootReducer, initialState);
export default store;
