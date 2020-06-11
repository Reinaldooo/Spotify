import { 
  AUTH_CALLBACK_SUCCESS,
  LOGOUT
 } from "../actions"

const authInitialState = {
  accessToken: "",
  errorMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
  name: "",
  thumb: "",
  product: ""
}

const authReducer = (state = authInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_CALLBACK_SUCCESS:
      return {
        ...state,
        ...payload,
        isLogged: true
      };
    case LOGOUT:
      return authInitialState;
    default:
      return state
  }
}

export default authReducer
