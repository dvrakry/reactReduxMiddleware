import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
//루트 리덕스
const RootReducer = combineReducers({
  counter,
  sample,
});

export default RootReducer;
