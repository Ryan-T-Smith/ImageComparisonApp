import merge from 'lodash/merge';
import {MAIN_PAGE} from "../constants/pages";

const DEFAULT_STATE = {
  currentPage: MAIN_PAGE
};

const UiReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

    default:
      return state;
  }
};

export default UiReducer;