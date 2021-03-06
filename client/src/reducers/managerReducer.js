// import isEmpty from '../validation/is-empty';
import { GET_MANAGERS } from '../actions/types';
const initialState=[];
export default function(state = initialState, action) {
    const managers = action.payload;
  switch (action.type) {
    case GET_MANAGERS:
      return managers;
    default:
      return state;
  }
}
