import { combineReducers } from "redux";
import eventReducer from "./events";

const appReducer = combineReducers({
  events: eventReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
