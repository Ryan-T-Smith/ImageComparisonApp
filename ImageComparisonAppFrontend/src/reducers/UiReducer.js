import merge from 'lodash/merge';
import {MAIN_PAGE} from "../constants/pages";
import {CHANGE_PAGE} from "../actions/ui_actions";

const DEFAULT_STATE = {
  currentPage: MAIN_PAGE
};

const UiReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case CHANGE_PAGE:
      newState.currentPage = action.page;
      return newState;
    default:
      return state;
  }
};

export default UiReducer;