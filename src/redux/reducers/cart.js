import { TOGGLE_CART_HIDDEN } from '../actions/types';

const intialState = {
  hidden: true
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
};

export default cartReducer;
