import React from 'react';

export default function Photo({ photo }) {
  return (
    <div>
      <img src={`https://picsum.photos/id/${photo.id}/400`} alt={`Author: ${photo.author}`} />
    </div>
  );
}
