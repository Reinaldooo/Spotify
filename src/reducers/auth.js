const authInitialState = {
  accessToken: "",
  errorMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
}

const authReducer = (state = authInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state
  }
}

export default authReducer
