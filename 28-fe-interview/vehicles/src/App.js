import React, { useEffect, useState } from 'react';
import './App.css';
import Make from './Make';

function App() {
  const [makes, setMakes] = useState([]);
  useEffect(() => {
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda?format=json')
      .then(response => response.json())
      .then(data => setMakes(data.Results));
  }, [])
  // to practice, empty out the div className="App"
  // TODO: render the makes onto the page
  // TODO: When a user clicks on a Make, the app makes a request for the models for that make
  // and displays those models on the page
  return (
    <div className="App">
      <header><h1>All About Hondas</h1></header>
      {makes.map(make => <Make make={make} key={`${make.Mfr_Name}${make.Make_ID}`} />)}
    </div>
  );
}

export default App;
