import {
  BROWSE_LOADING,
  BROWSE_SUCCESS,
  BROWSE_ERROR,
  PLAYLISTS_LOADING,
  PLAYLISTS_SUCCESS,
  PLAYLISTS_ERROR,
  PLAYLISTS_CLEAR,
  PLAYLIST_TRACKS_LOADING,
  PLAYLIST_TRACKS_SUCCESS,
  PLAYLIST_TRACKS_ERROR,
  PLAYLIST_TRACKS_CLEAR,
  ADD_TRACK,
  REMOVE_TRACK
} from "../actions";

const contentInitialState = {
  categories: [],
  recentTracks: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  browseLoading: false,
  playlistsLoading: false,
  tracksLoading: false,
  hasErrored: false
};

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case BROWSE_LOADING:
      return {
        ...state,
        browseLoading: true,
      };
    case BROWSE_SUCCESS:
      return {
        ...state,
        browseLoading: false,
        categories: payload.categories,
        recentTracks: payload.recentTracks,
      };
    case BROWSE_ERROR:
      return {
        ...state,
        browseLoading: false,
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
    case PLAYLISTS_CLEAR:
      return {
        ...state,
        playlists: []
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
    case PLAYLIST_TRACKS_CLEAR:
      return {
        ...state,
        tracks: []
      };
    case ADD_TRACK:
      return {
        ...state,
        playingNowId: payload.id,
        playingNowTrack: payload,
      };
    case REMOVE_TRACK:
      return {
        ...state,
        playingNowId: null,
        playingNowTrack: null,
      };
    default:
      return state;
  }
};

export default contentReducer;
