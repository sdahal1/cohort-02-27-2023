import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import Show from '../Show';

function Search() {
  const [query, setQuery] = useState('');
  const [searchedShows, setSearchedShows] = useState([]);

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
  return <div>
    <h2>Search Shows</h2>
    <SearchForm setAppQuery={setQuery} />
    {query && searchedShows.map(searchedShow => <Show show={searchedShow.show} key={searchedShow.show.id} />)}
  </div>
}

export default Search;