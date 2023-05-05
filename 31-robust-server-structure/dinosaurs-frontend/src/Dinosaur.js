import React from 'react';

function Dinosaur({ dinosaur }) {
  return <div>
    <h3>{dinosaur.name}</h3>
    <p>Bigness: {dinosaur.bigness}</p>
    <p>Coolness: {dinosaur.coolness}</p>
  </div>
}

// add dino form
// add colonies to dinosaur app & then also to the React app
// delete dinosaur button in React

export default Dinosaur;
