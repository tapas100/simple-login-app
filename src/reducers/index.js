import { combineReducers } from 'redux';
import { authReducers } from './authReducers'; 
import { usersReducers } from  './usersReducer';
const rootReducer = combineReducers({
  authState: authReducers,
  usersState : usersReducers 
});

export default rootReducer;