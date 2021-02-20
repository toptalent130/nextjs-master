import axios from 'axios';

import { GET_ERRORS, GET_ALLCHILDREN } from './types';


// Login - Get admin Token
export const registerAdmin = userData => dispatch => {
  axios
    .post('/api/admins/register', userData).then(
      res => {
        return dispatch({
            type: GET_ALLCHILDREN,
            payload: res.data
        });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const deleteAdmin = userData => dispatch => {
  axios
    .post('/api/admins/delete', userData).then(
      res => {
        return dispatch({
            type: GET_ALLCHILDREN,
            payload: res.data
        });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const updateAdmin = userData => dispatch => {
  axios
    .post('/api/admins/update', userData).then(
      res => {
        return dispatch({
            type: GET_ALLCHILDREN,
            payload: res.data
        });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
