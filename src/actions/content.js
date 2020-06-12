export const CATEGORIES_LOADING = "CATEGORIES_LOADING";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";
export const PLAYLISTS_LOADING = "PLAYLISTS_LOADING";
export const PLAYLISTS_SUCCESS = "PLAYLISTS_SUCCESS";
export const PLAYLISTS_ERROR = "PLAYLISTS_ERROR";
export const PLAYLIST_TRACKS_LOADING = "PLAYLIST_TRACKS_LOADING";
export const PLAYLIST_TRACKS_SUCCESS = "PLAYLIST_TRACKS_SUCCESS";
export const PLAYLIST_TRACKS_ERROR = "PLAYLIST_TRACKS_ERROR";

export const setCategoriesLoading = () => {
  return {
    type: CATEGORIES_LOADING
  };
};

export const setCategoriesSuccess = (data) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload: data
  };
};

export const setCategoriesError = () => {
  return {
    type: PLAYLISTS_ERROR,
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
