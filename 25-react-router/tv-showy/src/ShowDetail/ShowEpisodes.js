import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Episode from './Episode';

function ShowEpisodes() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(response => response.json())
      .then(data => setEpisodes(data));
  }, [id])
  return <div>
    <h4>Episodes go here {id}</h4>
    {episodes.map(episode => <Episode episode={episode} />)}
  </div>
}

export default ShowEpisodes;
