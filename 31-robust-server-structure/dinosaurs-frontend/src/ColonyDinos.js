import React, { useEffect, useState } from 'react';
import Dinosaur from './Dinosaur';

function ColonyDinos({ id }) {
  const [dinos, setDinos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/colonies/${id}/dinosaurs`)
      .then(response => response.json())
      .then(responseData => setDinos(responseData.data))
  }, [id])
  return <div>
    <h3>Dinosaurs for colony {id}</h3>
    {dinos.map(d => <Dinosaur dinosaur={d} key={d.id} />)}
  </div>
}

export default ColonyDinos;