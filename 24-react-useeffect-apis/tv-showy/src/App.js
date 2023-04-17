import React, { useEffect, useState } from 'react';
import './App.css';
import Show from './Show';
import SearchForm from './SearchForm';

function App() {
  const [numClicks, setNumClicks] = useState(1)
  const [allShows, setAllShows] = useState([]);
  const [query, setQuery] = useState('');
  const [searchedShows, setSearchedShows] = useState([]);
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
      } catch (e) {
        if (e.name === 'AbortError') {
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

  useEffect(() => {
    // only run this if the user has actually typed in a non-empty string
    if (query) {
      const abortController = new AbortController();
      try {
        fetch(
          `https://api.tvmaze.com/search/shows?q=${query}`,
          { signal: abortController.signal })
          .then(response => response.json())
          .then(shows => console.log(shows) || shows)
          .then(shows => setSearchedShows(shows));
      } catch (error) {
        if (error.name === 'AbortError') {
          // this is fine
          console.log('abort error');
        } else {
          // this is not fine
          throw error;
        }
      }
      return (() => {
        console.log('aborting');
        abortController.abort();
      })
    }
  }, [query]);

  return (
    <div className="App container">
      <h1>TV Showy</h1>
      <button onClick={() => setNumClicks(numClicks + 1)}>{numClicks}</button>
      <SearchForm setAppQuery={setQuery} />
      {query && searchedShows.map(searchedShow => <Show show={searchedShow.show} key={searchedShow.show.id} />)}
      {!query && allShows.map(show => <Show show={show} key={show.id} />)}
    </div>
  );
}

export default App;
