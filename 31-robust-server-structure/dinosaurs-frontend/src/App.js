import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Dinosaur from './Dinosaur';
import Colony from './Colony';

function App() {
  const [colonies, setColonies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/colonies')
      .then(response => response.json())
      .then(responseData => setColonies(responseData.data));
  }, [])

  return <main>
    <h1>Dinosaurs! rawr</h1>
    {colonies.map(colony => <Colony colony={colony} key={colony.id} />)}
  </main>
}

export default App;
