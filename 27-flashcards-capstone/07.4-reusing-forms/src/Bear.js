import React, { useState } from 'react';
import BearForm from './BearForm';

function Bear({ data, deleteBear, replaceBear }) {
  let [shouldShowEdit, setShouldShowEdit] = useState(false);
  let formSubmitHandler = (newBearData) => {
    replaceBear(data, newBearData);
    setShouldShowEdit(false);
  }
  return <div>
    <h3>{data.name}</h3>
    <img src={data.imageUrl} />
    <p>Lives in {data.habitat}</p>
    <button
      className="btn btn-info"
      onClick={() => setShouldShowEdit(!shouldShowEdit)}>
      Edit</button>
    {shouldShowEdit ?
      <BearForm
        header="Edit bear"
        initialFormData={data}
        submitHandler={formSubmitHandler} /> : ''}
    <button
      className="btn btn-danger"
      onClick={() => deleteBear(data)}>
      Delete</button>
  </div>
}

export default Bear;
