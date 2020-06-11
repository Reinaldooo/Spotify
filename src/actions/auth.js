export const AUTH_CALLBACK_SUCCESS = "AUTH_CALLBACK_SUCCESS";

export const authCallbackSuccess = (credentials) => {
  console.log(credentials);
  return {
    type: AUTH_CALLBACK_SUCCESS,
    payload: { ...credentials },
  };
};
