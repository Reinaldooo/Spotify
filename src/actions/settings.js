export const TOGGLE_RECENTS_BUTTON = "TOGGLE_RECENTS_BUTTON";

export const toggleRecentsButton = (data) => {
  return {
    type: TOGGLE_RECENTS_BUTTON,
    payload: data
  };
};