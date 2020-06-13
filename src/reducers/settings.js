import {
  TOGGLE_RECENTS_BUTTON
} from "../actions";

const contentInitialState = {
  hideRecent: false,
  toggleTitle: "Ocultar"
};

const settingsReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case TOGGLE_RECENTS_BUTTON:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};

export default settingsReducer;
