import { CREATE_USERINFO, UPDATE_USERINFO, GET_USERINFO } from '../actions/types';

const initialState = {
};

export default function(state = initialState, action) {
  const userinfo = action.payload
  switch (action.type) {
    case CREATE_USERINFO:
      return {
        ...userinfo
      };
    case UPDATE_USERINFO:
      return {
        ...userinfo
      };
    case GET_USERINFO:
      return {
        ...userinfo
      }
    default:
      return state;
  }
}
