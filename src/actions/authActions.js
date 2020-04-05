import { authConstants } from "../constants";
import { AuthApi } from "../api";

const signIn = (username, password) => dispatch => {
  ;
  dispatch({ type: authConstants.LOGIN_STARTED });
  return AuthApi
    .login(username, password)
    .then(response => {
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: response
      });
      return response;
    })
    .catch(error => {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: error
      });
      throw error;
    });
};

const signOut = () => dispatch => {
  dispatch({ type: authConstants.LOGOUT_STARTED });
  return AuthApi
    .logout()
    .then(response => {
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: response
      });
      return response;
    })
    .catch(error => {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: error
      });
      throw error;
    });
};


const resetLoginProcess = () => dispatch => {
  dispatch({ type: authConstants.RESET_LOGIN_PROCESS });
};

export const authActions = {
  signIn,
  signOut,
  resetLoginProcess
};
