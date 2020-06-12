export const CATEGORIES_LOADING = "CATEGORIES_LOADING";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";
export const PLAYLISTS_LOADING = "PLAYLISTS_LOADING";
export const PLAYLISTS_SUCCESS = "PLAYLISTS_SUCCESS";
export const PLAYLISTS_ERROR = "PLAYLISTS_ERROR";

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

export const setCategoriesError = (error) => {
  return {
    type: PLAYLISTS_ERROR,
    payload: error
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

export const setPlaylistsError = (error) => {
  return {
    type: PLAYLISTS_ERROR,
    payload: error
  };
};
