import React, { useState } from 'react';

function SearchForm({ setAppQuery }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setAppQuery(query);
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="search">Search for a show!</label>
    <input type="text" name="search" id="search" onChange={e => setQuery(e.target.value)} value={query} />
    <button>Search</button>
  </form>
}

export default SearchForm;
