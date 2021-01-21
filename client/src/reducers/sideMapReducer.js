import {
    GET_MAP
  } from '../actions/types';

export default function(state, action) {
    switch (action.type) {
        case GET_MAP:
            return action.payload;
        default: return [];
    }
}
  