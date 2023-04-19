import React from 'react';

function Episode({ episode }) {
  let { season, number, name } = episode;
  return <p>{season}.{number} {name}</p>
}

export default Episode;