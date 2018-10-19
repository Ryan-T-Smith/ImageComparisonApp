import {combineReducers} from 'redux';
import UiReducer  from "./UiReducer";

const RootReducer = combineReducers({
  ui: UiReducer
});

export default RootReducer;