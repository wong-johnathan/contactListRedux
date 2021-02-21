import { combineReducers } from "redux";
import Users from "./users";
import Modals from "./modals";

export default combineReducers({
  users: Users,
  modals: Modals,
});
