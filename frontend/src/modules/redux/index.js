import { combineReducers } from "redux";
import PageReducer from "./reducers/pageReducer";

const RootReducer = combineReducers({
  PageReducer,
});

export default RootReducer;
