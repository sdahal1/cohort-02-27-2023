import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShowDetail() {
  const { id } = useParams();
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
    <p>{showData.summary}</p>
  </div>
}

export default ShowDetail;
