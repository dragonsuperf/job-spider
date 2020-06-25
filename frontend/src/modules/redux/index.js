import { combineReducers } from "redux";
import PageReducer from "./reducers/pageReducer";
import CompanyReducer from './reducers/companyReducer'

const RootReducer = combineReducers({
  PageReducer,
  CompanyReducer,
});

export default RootReducer;
