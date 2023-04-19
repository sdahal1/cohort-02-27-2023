import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ShowEpisodes from './ShowEpisodes';

function ShowDetail() {
  // path has :id, a parameter to be filled in later
  // url has 250, a specific 
  const { path, url, params: { id } } = useRouteMatch();
  // const {path, url, params} = useRouteMatch();
  // const { id } = params;
  const [showData, setShowData] = useState({});
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowData(data));
  }, [id])
  console.log(showData);
  return <div>
    <h4>{showData.name}</h4>
    <p>Genres: {showData.genres && showData.genres.join(', ')}</p>
    {showData.image?.medium && <img src={showData.image.medium} />}
    <div>
      <Link to={url}>Summary</Link>
      <Link to={`${url}/episodes`}>Episodes</Link>
    </div>
    <Switch>
      <Route path={path} exact={true}>
        <p>{showData.summary}</p>
      </Route>
      <Route path={`${path}/episodes`}>
        <ShowEpisodes />
      </Route>
    </Switch>
  </div>
}

export default ShowDetail;
