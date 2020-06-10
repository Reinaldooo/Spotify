const userInitialState = {
  email: "",
  errorMessage: "",
  name: "",
  status: 'idle',
  thumb: "",
  product: ""
}

const userReducer = (state = userInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state
  }
}

export default userReducer;
