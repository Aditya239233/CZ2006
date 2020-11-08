import { HBD_BARGRAPH, HBD_TIMESERIES } from "../actions/types";

const initial_state = [];

export default function (state = initial_state, action) {
  switch (action.type) {
    case HBD_BARGRAPH:
      return {
        ...state,
        bargraph: action.payload,
      };
    case HBD_TIMESERIES:
      return {
        ...state,
        timeseries: action.payload,
      };
    default:
      return state;
  }
}
