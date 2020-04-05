import { usersConstants } from '../constants';
import { UsersApi } from '../api';

const getUsers = () => dispatch => {
  dispatch({type: usersConstants.FETCH_USERS_STARTED});
  return UsersApi
  .getUsers()
  .then((response) => {
    dispatch({
      type: usersConstants.FETCH_USERS_SUCCESS,
      payload: response,
    });
    return response;
  })
  .catch((error) => {
    dispatch({
      type: usersConstants.FETCH_USERS_FAILURE,
      payload: error,
    });
  });
};


export const usersActions = {
  getUsers
};