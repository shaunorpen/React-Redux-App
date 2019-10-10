import * as types from './actionTypes';

const initialPhotos = [];
export function photosReducer(state = initialPhotos, action) {
  switch (action.type) {
    case types.ADD_PHOTOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

const initialPage = 1;
export function pageReducer(state = initialPage, action) {
  switch (action.type) {
    case types.INCREMENT_PAGE:
      return state + 1;
    default:
      return state;
  }
}
