// to practice, delete this file
import React, { useEffect, useState } from 'react';

function Models({ makeId }) {
  console.log('a models component is being rendered');
  const [models, setModels] = useState([]);
  useEffect(() => {
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`)
      .then(response => response.json())
      .then(data => setModels(data.Results))
  }, [makeId])
  return <p>{models.map(model => <p>{model.Make_Name} {model.Model_Name}</p>)}</p>
}

export default Models;
