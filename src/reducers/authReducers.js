import { authConstants } from '../constants';

const initState = {
    isLoggedIn: false,
    loginProcess: false,
    loginSuccess: false,
    loginFailure: false,
    isLoading : false
}

const authReducers = (state = initState, action) => {
    switch (action.type) {
      case authConstants.RESET_LOGIN_PROCESS:{
        return {
          ...state,
          loginProcess: false,
          loginSuccess: false,
          loginFailure: false,
          isLoading: false
        };
      }
      case authConstants.LOGIN_STARTED: {
        return {
          ...state,
          loginProcess: true,
          loginSuccess: false,
          loginFailure: false,
          isLoading: true
        };
      }
      case authConstants.LOGIN_SUCCESS: {
        ;
        return {
          ...state,
          loginProcess: false,
          loginSuccess: true,
          loginFailure: false,
          isLoading: false,
          isLoggedIn : true,
          serverError: '',
        };
      }
      case authConstants.LOGIN_FAILURE: {
        return {
          ...state,
          serverError:action.payload.details,
          loginProcess: false,
          loginSuccess: false,
          loginFailure: true,
          isLoading: false,
        };
      }
 
     case authConstants.LOGOUT_STARTED: {
        return {
          ...state,
        };
      }
      case authConstants.LOGOUT_SUCCESS: {
        return {
          ...initState,
          isLoggedIn: false,
          loginProcess: false,
          loginSuccess: false,
          loginFailure: false,
        };
      }
      case authConstants.LOGOUT_FAILURE: {
        return {
        };
      }
      default:
        return state;
    }
  };
  
  export { authReducers };