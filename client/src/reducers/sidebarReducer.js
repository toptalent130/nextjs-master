// import isEmpty from '../validation/is-empty';
import { SIDEBAR_STATES } from '../actions/types';
const initialState={
    type: "setting",
    wm_1w: true,
    interest: true,
    gender: "none"
}
export default function(state = initialState, action) {
    const newStates = action.payload;
  switch (action.type) {
    case SIDEBAR_STATES:
      return {
        ...state,
        ...newStates
      };
    default:
      return state;
  }
}
