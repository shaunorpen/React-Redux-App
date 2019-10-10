import axios from 'axios';
import * as types from './actionTypes';

const todosApi = 'http://localhost:4000/todos';
const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random, async...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF!

export function addToCart(itemId) {
  return {
    type: types.ADD_TO_CART,
    payload: itemId,
  };
}

export function getFruits(fruits) {
  return {
    type: types.ADD_FRUITS,
    payload: fruits,
  };
}

export function getMeats(meats) {
  return {
    type: types.ADD_MEATS,
    payload: meats,
  };
}

export const getStock = () => dispatch => {
  const fruitsPromise = axios.get(fruitsApi);
  const meatsPromise = axios.get(meatsApi);
  Promise.all([fruitsPromise, meatsPromise])
    .then(([fruitsApiResponse, meatsApiResponse]) => {
      const fruits = fruitsApiResponse.data;
      const meats = meatsApiResponse.data;
      dispatch(getFruits(fruits));
      dispatch(getMeats(meats));
    })
    .catch(err => console.log(err.message));
};
