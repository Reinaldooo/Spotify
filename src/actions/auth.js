export const AUTH_CALLBACK_SUCCESS = "AUTH_CALLBACK_SUCCESS";
export const LOGOUT = "LOGOUT";

export const authCallbackSuccess = (credentials) => {
  return {
    type: AUTH_CALLBACK_SUCCESS,
    payload: { ...credentials },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
