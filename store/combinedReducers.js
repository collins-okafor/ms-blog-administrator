import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import landingPageReducer from "./reducers/landingPageReducer";
import DashboardConditionReducers from "./reducers/dashboardConditionReducers";
import generalReducer from "./reducers/generalReduces";
import DashboardReducers from "./reducers/dashboardReducer";
import SubtitleReducers from "./reducers/subtitle";
import createAdmin from "./reducers/createAdmin";

export default combineReducers({
  authReducer,
  landingPageReducer,
  DashboardConditionReducers,
  generalReducer,
  DashboardReducers,
  SubtitleReducers,
  createAdmin,
});
