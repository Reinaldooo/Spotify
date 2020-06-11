const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  categoriesLoading: false,
  errorMessage: "",
}

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state
  }
}

export default contentReducer;
