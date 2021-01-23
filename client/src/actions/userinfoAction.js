import axios from 'axios';
import {getSideMap} from './sidemapActions'
import {
  CREATE_USERINFO,
  UPDATE_USERINFO,
  SET_CURRENTUSERINFO,
  GET_ERRORS,
  GET_MAP
} from './types';

//get problems
// export const getQuestion = (data) => dispatch =>{
//   axios
//     .post('/api/problem/getProblem', data)
//     .then(res => dispatch({
//       type: GET_PROBLEMS,
//       payload: res.data
//     }))
//     .catch(err => console.log(err));
// }
// Add Problem
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
export const updateChildInfo = (data) => dispatch => {
    axios
      .post('/api/userinfo/updatechilddata', data)
      .then(res => {
        localStorage.setItem('userinfo',JSON.stringify(res.data))
        dispatch(setCurrentUserinfo(JSON.parse(localStorage.getItem('userinfo'))));
        dispatch(getSideMap());
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
        localStorage.setItem('userinfo',JSON.stringify(res.data))
        // console.log(res.data);
        // console.log('asdfsadfsfdd',JSON.parse(localStorage.getItem('userinfo')));
        dispatch(setCurrentUserinfo(JSON.parse(localStorage.getItem('userinfo'))));
    //    history.push('/basicquestions');
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
export const setCurrentUserinfo = decoded => {
    return {
      type: SET_CURRENTUSERINFO,
      payload: decoded
    };
};
export const deleteChild = (childId) => dispatch => {
    axios
    .post('/api/userinfo/deletechild', childId)
    .then(res => {
        localStorage.setItem('userinfo',JSON.stringify(res.data))
        dispatch(setCurrentUserinfo(JSON.parse(localStorage.getItem('userinfo'))));
        dispatch(getSideMap());
        return dispatch({
            type:   UPDATE_USERINFO,
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

