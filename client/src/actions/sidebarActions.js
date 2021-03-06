import axios from 'axios';
import { SIDEBAR_STATES } from './types';

export const sidebar_States = (newStates) => dispatch => {
    dispatch({
        type: SIDEBAR_STATES,
        payload: newStates
    })
//   axios
//     .get('/api/users/get_managers')
//     .then((res) => dispatch({
//         type: GET_MANAGERS,
//         payload: res.data
//     }))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
};

