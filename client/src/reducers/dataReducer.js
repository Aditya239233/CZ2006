import { HBD_DATA } from "../actions/types";

const initial_state = [];

export default function (state = initial_state, action) {
  switch (action.type) {
    case HBD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
