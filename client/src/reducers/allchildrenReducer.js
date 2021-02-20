import {
    GET_ALLCHILDREN
  } from '../actions/types';

export default function(state, action) {
    switch (action.type) {
        case GET_ALLCHILDREN:
            return action.payload;
        default: return {};
    }
}
  