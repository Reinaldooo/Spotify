import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  PLAYLISTS_LOADING,
  PLAYLISTS_SUCCESS,
  PLAYLISTS_ERROR,
  PLAYLIST_TRACKS_LOADING,
  PLAYLIST_TRACKS_SUCCESS,
  PLAYLIST_TRACKS_ERROR,
} from "../actions";

const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  categoriesLoading: false,
  playlistsLoading: false,
  tracksLoading: false,
  hasErrored: false,
};

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesLoading: false,
        categories: payload,
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        categoriesLoading: false,
        hasErrored: true,
      };
    case PLAYLISTS_LOADING:
      return {
        ...state,
        playlistsLoading: true,
      };
    case PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlistsLoading: false,
        playlists: payload,
      };
    case PLAYLISTS_ERROR:
      return {
        ...state,
        playlistsLoading: false,
        hasErrored: true,
      };
    case PLAYLIST_TRACKS_LOADING:
      return {
        ...state,
        tracksLoading: true,
      };
    case PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        tracksLoading: false,
        tracks: payload,
      };
    case PLAYLIST_TRACKS_ERROR:
      return {
        ...state,
        tracksLoading: false,
        hasErrored: true,
      };
    default:
      return state;
  }
};

export default contentReducer;
