import axios from "axios";
import { ADD_EVENT, LOAD_EVENTS } from "./types";

export const addEvent = (req) => async (dispatch) => {
  try {
    const payload = await axios.post("api/events", req);

    if (payload.data.error) {
    } else if (payload.data) {
      dispatch({
        type: ADD_EVENT,
        payload: payload.data,
      });
    }
  } catch (e) {}
};

export const getEvents = () => async (dispatch) => {
  try {
    const payload = await axios.get("api/events");

    if (payload.data.error) {
      console.log(payload.data.error);
    } else if (payload.data) {
      dispatch({
        type: LOAD_EVENTS,
        payload: payload.data,
      });
    }
  } catch (e) {}
};
