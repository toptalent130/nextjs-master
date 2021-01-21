import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import answerReducer from './answerReducer';
import problemReducer from './problemReducer';
import adminmReducer from './adminReducer';
import sideMapReducer from './sideMapReducer';
import userinfoReducer from './userinfoReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  answer: answerReducer,
  problems: problemReducer,
  admin: adminmReducer,
  sidemaps: sideMapReducer,
  userinfo: userinfoReducer
});
