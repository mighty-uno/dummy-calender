import { ADD_EVENT, LOAD_EVENTS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_EVENTS:
      state = [...action.payload];
      return state;

    case ADD_EVENT:
      state = [action.payload, ...state];
      return state;

    default:
      return state;
  }
}
