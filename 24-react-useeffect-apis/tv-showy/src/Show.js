import React from 'react';

function Show({ show }) {
  return <div>
    <h3>{show.name}</h3>
    {show?.image?.medium && <img src={show.image.medium} />}
    <p>{show.summary}</p>
  </div>
}

export default Show;
