import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  PLAYLISTS_LOADING,
  PLAYLISTS_SUCCESS,
  PLAYLISTS_ERROR
} from "../actions"

const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  loading: false,
  errorMessage: "",
}

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: true
      }
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload
      }
    case CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload
      }
    case PLAYLISTS_LOADING:
    return {
      ...state,
      loading: true
    }
    case PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        playlists: payload
      }
    case PLAYLISTS_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload
      }
    default:
      return state
  }
}

export default contentReducer;
