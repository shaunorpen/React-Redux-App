import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Photo from './Photo';

export function Gallery({ photos, getPhotos, incrementPage }) {
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="component">
      {photos.map(photo => <Photo photo={photo} />)}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Gallery);
