import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Browse from './Browse';
import Search from './Search/Search';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ShowDetail from './ShowDetail';

function App() {
  const [numClicks, setNumClicks] = useState(1)

  // change the title - useEffect because changing anything in the document is a side effect
  useEffect(() => {
    document.title = `TV Showy ${new Date().getSeconds()}`
  }, [])
  return (
    <Router>
      <div className="App container">
        <h1>TV Showy</h1>
        <button onClick={() => setNumClicks(numClicks + 1)}>{numClicks}</button>
        <nav>
          <Link to="/">Browse</Link>
          <Link to="/search">Search</Link>
        </nav>
        <Route path="/" exact={true}>
          <Browse />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/shows/:id">
          <ShowDetail />
        </Route>
      </div>
    </Router>
  );
}

export default App;
