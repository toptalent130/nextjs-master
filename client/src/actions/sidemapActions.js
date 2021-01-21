import axios from 'axios';

import {
  GET_MAP
} from './types';

//get problems
export const getSideMap = () => dispatch =>{
  axios
    .get('/api/sidemap')
    .then(res => {
      return dispatch({
      type: GET_MAP,
      payload: res.data
    })})
    .catch(err => console.log(err));
}

