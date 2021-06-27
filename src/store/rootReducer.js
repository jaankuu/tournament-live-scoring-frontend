import { combineReducers } from "redux";
import events from "./events/reducer"
import user from "./user/reducer"
import eventDetails from "./eventDetails/reducer"
import points from "./points/reducer"

export default combineReducers({
  events,
  user,
  eventDetails,
  points,
});
