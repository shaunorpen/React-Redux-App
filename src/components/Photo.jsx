import React from 'react';

export default function Photo({ photo }) {
  return (
    <div className='box'>
      <img src={`https://picsum.photos/id/${photo.id}/350`} alt={`Author: ${photo.author}`} />
      <p>
        <span>by {photo.author}</span>
        <a href={photo.url} target='_blank' rel='noopener noreferrer' className='button is-success'>View on Unsplash</a>
      </p>
    </div>
  );
}
