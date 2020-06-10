const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
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
