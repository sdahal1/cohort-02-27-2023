import React, { useState } from 'react';
import Models from './Models';
// TODO: render makes onto the page
// to practice, empty out this file
function Make({ make }) {
  const [shouldShowModels, setShouldShowModels] = useState(false);
  // bad: useEffect inside of the make to fetch model data
  // that data will be fetched for every make, regardless of whether it's necessary
  // better: useEffect inside of a child component that only gets rendered conditionally
  return <div>
    <p onClick={() => setShouldShowModels(!shouldShowModels)}>{make.Make_Name} ({make.Mfr_Name})</p>
    {shouldShowModels && <Models makeId={make.Make_ID} />}
  </div>
}

export default Make;
