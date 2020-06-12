import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR
} from "../actions"

const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  categoriesLoading: false,
  errorMessage: "",
}

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: payload
      }
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesLoading: false,
        categories: payload
      }
    case CATEGORIES_ERROR:
      return {
        ...state,
        categoriesLoading: false,
        errorMessage: payload
      }
    default:
      return state
  }
}

export default contentReducer;
