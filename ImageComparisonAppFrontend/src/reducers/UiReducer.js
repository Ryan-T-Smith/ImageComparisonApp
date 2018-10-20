import merge from 'lodash/merge';
import {CAMERA_VIEW} from "../constants/views";

const DEFAULT_STATE = {
  currentPage: CAMERA_VIEW
};

const UiReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch (action.type) {

    default:
      return state;
  }
}

export default UiReducer;