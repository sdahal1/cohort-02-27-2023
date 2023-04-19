import React from 'react';
import { Link } from 'react-router-dom';

function Show({ show }) {

  return <div>
    <Link to={`/potatoes/${show.id}`}>
      <h3>{show.name}</h3>
    </Link>
    {show?.image?.medium && <img src={show.image.medium} />}
    <p>{show.summary}</p>
  </div>
}

export default Show;
