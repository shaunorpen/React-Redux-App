import React from 'react';

export default function Photo({ photo }) {
  return (
    <div>
      <img src={`https://picsum.photos/id/${photo.id}/350`} alt={`Author: ${photo.author}`} />
      <p>
        <span>by {photo.author}</span>
        <span><a href={photo.url} target='_blank' rel='noopener noreferrer'>View on Unsplash</a></span>
      </p>
    </div>
  );
}
