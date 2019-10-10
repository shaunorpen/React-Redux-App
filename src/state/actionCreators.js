import axios from 'axios';
import * as types from './actionTypes';

export function addError(error) {
  return {
    type: types.ADD_ERROR,
    payload: error,
  };
}

export function addPhotos(photos) {
  return {
    type: types.ADD_PHOTOS,
    payload: photos,
  };
}

export function incrementPage() {
  return {
    type: types.INCREMENT_PAGE,
  };
}

export function decrementPage() {
  return {
    type: types.DECREMENT_PAGE,
  };
}

export const getPhotos = (url) => dispatch => {
  axios.get(url)
    .then(res => {
      const photos = res.data;
      dispatch(addPhotos(photos));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
};
