import { SEND_MESSAGE } from "./types";
import axios from "axios";

export const sendMessage = (message_context) => async (dispatch) => {
  const res = await axios.get("/api/message", message_context);

  dispatch({
    type: SEND_MESSAGE,
    payload: res.data,
  });
};
