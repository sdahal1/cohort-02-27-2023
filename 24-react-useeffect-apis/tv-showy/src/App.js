import React, { useEffect, useState } from 'react';
import './App.css';
import Show from './Show';

function App() {
  const [numClicks, setNumClicks] = useState(1)
  const [allShows, setAllShows] = useState([]);
  // change the title - useEffect because changing anything in the document is a side effect
  useEffect(() => {
    document.title = `TV Showy ${new Date().getSeconds()}`
  }, [])
  useEffect(() => {
    // fetch('https://api.tvmaze.com/shows?page=1')
    //   .then(response => response.json())
    //   .then(shows => setAllShows(shows));
    async function fetchAllShows() {
      let response = await fetch('https://api.tvmaze.com/shows?page=1');
      let shows = await response.json();
      setAllShows(shows);
    }
    fetchAllShows();
  }, [])

  return (
    <div className="App container">
      <h1>TV Showy</h1>
      <button onClick={() => setNumClicks(numClicks + 1)}>{numClicks}</button>
      {allShows.map(show => <Show show={show} key={show.id} />)}
    </div>
  );
}

export default App;
