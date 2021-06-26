import { combineReducers } from "redux";
import events from "./events/reducer"
import user from "./user/reducer"
import eventDetails from "./eventDetails/reducer"

export default combineReducers({
  events,
  user,
  eventDetails,
});
