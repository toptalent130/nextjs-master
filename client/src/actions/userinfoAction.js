import axios from 'axios';
import {
  CREATE_USERINFO,
  UPDATE_USERINFO,
  GET_ERRORS,
  GET_USERINFO,
  GET_ALLCHILDREN
} from './types';
export const createUserInfo = (userid) => dispatch => {
  axios
    .post('/api/userinfo/register', userid)
    .then(res => {
        return dispatch({
            type: CREATE_USERINFO,
            payload: res.data
        })}
    )
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};
export const updateChildInfo = (data) => (dispatch) => {
    axios
      .post('/api/userinfo/updatechilddata', data)
      .then(res => {
        return dispatch({
            type: UPDATE_USERINFO,
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
export const updateUserInfo = (data, history) => dispatch => {
    axios
    .post('/api/userinfo/update', data)
    .then(res => {
        return dispatch({
            type: UPDATE_USERINFO,
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
export const getAllChildren = () => dispatch => {
    axios
    .get('/api/allchildren')
    .then(res => {
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
export const getUserInfo = (userid) => dispatch => {
    axios
    .post('/api/userinfo/getone', userid)
    .then(res => {
        return dispatch({
            type: GET_USERINFO,
            payload: res.data
        })}
    )
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};
export const deleteChild = (childId) => dispatch => {
    axios
    .post('/api/userinfo/deletechild', childId)
    .then(res => {
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
}

