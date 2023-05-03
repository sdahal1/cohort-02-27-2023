import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [models, setModels] = useState([])
  const [make, setMake] = useState('honda');
  const [input, setInput] = useState('');
  useEffect(() => {
    debugger;
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`)
      .then(response => response.json())
      .then(data => setModels(data.Results))
  }, [make])
  return (
    <div className="App">
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => setMake(input)}>Search</button>
      {models.map(model => <p key={model.Model_ID}>{model.Model_Name}</p>)}
    </div>
  );
}

export default App;
