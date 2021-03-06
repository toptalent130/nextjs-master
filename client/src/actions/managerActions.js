import axios from 'axios';
import { GET_MANAGERS, GET_ERRORS} from './types';

// Register User
export const getManagers = () => dispatch => {
  axios
    .get('/api/users/get_managers')
    .then((res) => {
        dispatch({
        type: GET_MANAGERS,
        payload: res.data
    })})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const deleteManager = (data) => dispatch => {
    axios
      .post('/api/users/delete_manager', data)
      .then((res) => {
          dispatch({
          type: GET_MANAGERS,
          payload: res.data
      })})
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  export const updateManager = (data) => dispatch => {
    axios
      .post('/api/users/update_manager', data)
      .then((res) => {
          dispatch({
          type: GET_MANAGERS,
          payload: res.data
      })})
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  export const registerManager = (data) => dispatch => {
    axios
      .post('/api/users/register_manager', data)
      .then((res) => {
          dispatch({
          type: GET_MANAGERS,
          payload: res.data
      })})
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
