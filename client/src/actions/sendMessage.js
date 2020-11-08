import { SEND_MESSAGE } from "./types";
import axios from "axios";

export const sendMessage = (email, message) => async (dispatch) => {
  const res = await axios.post("/api/message", { email, message });

  dispatch({
    type: SEND_MESSAGE,
    payload: res.data,
  });
};
