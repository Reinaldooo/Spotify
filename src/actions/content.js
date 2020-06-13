export const BROWSE_LOADING = "BROWSE_LOADING";
export const BROWSE_SUCCESS = "BROWSE_SUCCESS";
export const BROWSE_ERROR = "BROWSE_ERROR";
export const PLAYLISTS_LOADING = "PLAYLISTS_LOADING";
export const PLAYLISTS_SUCCESS = "PLAYLISTS_SUCCESS";
export const PLAYLISTS_ERROR = "PLAYLISTS_ERROR";
export const PLAYLISTS_CLEAR = "PLAYLISTS_CLEAR";
export const PLAYLIST_TRACKS_LOADING = "PLAYLIST_TRACKS_LOADING";
export const PLAYLIST_TRACKS_SUCCESS = "PLAYLIST_TRACKS_SUCCESS";
export const PLAYLIST_TRACKS_ERROR = "PLAYLIST_TRACKS_ERROR";
export const PLAYLIST_TRACKS_CLEAR = "PLAYLIST_TRACKS_CLEAR";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const setBrowseLoading = () => {
  return {
    type: BROWSE_LOADING
  };
};

export const setBrowseSuccess = (data) => {
  return {
    type: BROWSE_SUCCESS,
    payload: data
  };
};

export const setBrowseError = () => {
  return {
    type: BROWSE_ERROR,
  };
};

// Playlists

export const setPlaylistsLoading = () => {
  return {
    type: PLAYLISTS_LOADING
  };
};

export const setPlaylistsSuccess = (data) => {
  return {
    type: PLAYLISTS_SUCCESS,
    payload: data
  };
};

export const setPlaylistsError = () => {
  return {
    type: PLAYLISTS_ERROR,
  };
};

export const clearPlaylists = () => {
  return {
    type: PLAYLISTS_CLEAR,
  };
};

// Playlist tracks

export const setPlaylistTracksLoading = () => {
  return {
    type: PLAYLIST_TRACKS_LOADING
  };
};

export const setPlaylistTracksSuccess = (data) => {
  return {
    type: PLAYLIST_TRACKS_SUCCESS,
    payload: data
  };
};

export const setPlaylistTracksError = () => {
  return {
    type: PLAYLIST_TRACKS_ERROR,
  };
};

export const clearTracks = () => {
  return {
    type: PLAYLIST_TRACKS_CLEAR,
  };
};

// Tracks

export const addTrack = (track) => {
  return {
    type: ADD_TRACK,
    payload: track
  };
};

export const removeTrack = () => {
  return {
    type: REMOVE_TRACK,
  };
};

