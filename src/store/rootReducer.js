import { combineReducers } from "redux";
import events from "./events/reducer"
import user from "./user/reducer"

export default combineReducers({
  events,
  user
});
