import React from 'react';
import Bear from './Bear';

function BearsList({ allOfTheBears, deleteBear, replaceBear }) {
  return <div>
    {allOfTheBears.map(justOneBear => <Bear data={justOneBear} deleteBear={deleteBear} replaceBear={replaceBear} />)}
  </div>
}

export default BearsList;