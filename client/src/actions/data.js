import axios from "axios";
import { HBD_BARGRAPH, HBD_TIMESERIES } from "./types";

export const getBarGraph = () => async (dispatch) => {
  await axios
    .get("/api/data/bargraph")
    .then((res) => {
      dispatch({
        type: HBD_BARGRAPH,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};

export const getTimeSeries = () => async (dispatch) => {
  await axios
    .get("/api/data/timeseries")
    .then((res) => {
      dispatch({
        type: HBD_TIMESERIES,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};
