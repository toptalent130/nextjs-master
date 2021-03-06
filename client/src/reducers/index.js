import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import managerReducer from './managerReducer'
import sidebarReducer from './sidebarReducer'

export default combineReducers({
  auth: authReducer,
  managers: managerReducer,
  errors: errorReducer,
  sidebar_states: sidebarReducer
});
