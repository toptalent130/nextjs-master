// import isEmpty from '../validation/is-empty';

import { CREATE_USERINFO, UPDATE_USERINFO, SET_CURRENTUSERINFO } from '../actions/types';

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
    case SET_CURRENTUSERINFO:
      return {
        ...userinfo
    };
    default:
      return state;
  }
}
