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
    
    // let us cancel the fetch later
    const abortController = new AbortController();
    
    async function fetchAllShows() {
      try {
        let response = await fetch(
          'https://api.tvmaze.com/shows?page=1',
          { signal: abortController.signal } // the abortController has the ability to cancel you
          );
        let shows = await response.json();
        setAllShows(shows);
      } catch(e) {
        if(e.name === 'AbortError') {
          // abort errors are expected, so don't worry about it
          console.log('abort error');
        } else {
          throw e;
        }
      }
    }
    fetchAllShows();
    return () => {
      abortController.abort();
    }
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
