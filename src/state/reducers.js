// (3)
import * as types from './actionTypes';
// - rename the reducer, give it a unique name, expose it
// - make sure the reducer is a "pure" function
// - which takes state (slice) and an action as args
// - and returns FRESH NEW STATE (slice)
// - NO RANDOMNESS no uuid() no moment.js no Math.random()
// - we need a default parameter to supply the initial value for the slice

const initialCart = [];
export function cartReducer(state = initialCart, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return state.concat(action.payload);
    default:
      return state;
  }
}

const intialStock = { meats: [], fruits: [] };
export function stockReducer(state = intialStock, action) {
  switch (action.type) {
    case types.ADD_FRUITS:
      return {
        ...state,
        fruits: action.payload,
      };
    case types.ADD_MEATS:
      return {
        ...state,
        meats: action.payload,
      };
    default:
      return state;
  }
}
