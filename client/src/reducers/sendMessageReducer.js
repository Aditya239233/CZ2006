import { SEND_MESSAGE } from "../actions/types";

const initialState = "";

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEND_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
}
