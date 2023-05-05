import React, { useState } from 'react';
import ColonyDinos from './ColonyDinos';

function Colony({ colony }) {
  const [shouldShowDinos, setShouldShowDinos] = useState(false);
  return <div>
    <h3 onClick={() => setShouldShowDinos(!shouldShowDinos)}>Colony: {colony.name}</h3>
    {shouldShowDinos && <ColonyDinos id={colony.id} />}
  </div>
}

export default Colony;
