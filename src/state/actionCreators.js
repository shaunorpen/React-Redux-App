import axios from 'axios';
import * as types from './actionTypes';

const photosApi = 'https://picsum.photos/v2/list?limit=9&page=1';

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

export const getPhotos = () => dispatch => {
  axios.get(photosApi)
    .then(res => {
      const photos = res.data;
      dispatch(addPhotos(photos));
    })
    .catch(err => console.log(err.message));
};
