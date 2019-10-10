import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Photo from './Photo';

export function Gallery({ photos, getPhotos, incrementPage, decrementPage, page }) {
  const photosApi = `https://picsum.photos/v2/list?limit=9&page=${page}`;
  useEffect(() => {
    getPhotos(photosApi);
  }, [page]);
  return (
    <div className="component">
      {photos.map(photo => <Photo photo={photo} key={photo.id} />)}
      <div>
        <button onClick={decrementPage} disabled={page === 1}>Back</button>
        <button onClick={incrementPage}>Next</button>
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Gallery);
