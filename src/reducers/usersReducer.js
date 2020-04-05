import { usersConstants } from '../constants';

const initState = {
  getUsersProcess: false,
  getUsersSuccess: false,
  getUsersFailure: false,
  usersList:[],
};

const usersReducers = (state = initState, action) => {
  switch (action.type) {
    case usersConstants.FETCH_USERS_STARTED: {
      return {
        ...state,
        getUsersProcess: true,
        getUsersSuccess: false,
        getUsersFailure: false,
      };
    }
    case usersConstants.FETCH_USERS_SUCCESS: {
        ;
      return {
        ...state,
        getUsersProcess: false,
        getUsersSuccess: true,
        getUsersFailure: false,
        usersList:action.payload
      };
    }
    case usersConstants.FETCH_USERS_FAILURE: {
      return {
        ...state,
        getUsersProcess: false,
        getUsersSuccess: false,
        getUsersFailure: true
      };
    }
    default:
      return state;
  }
};

export { usersReducers };