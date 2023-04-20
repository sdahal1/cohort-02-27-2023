import React, { useState } from 'react';

// similarities:
// basic structure of the form (inputs, labels, buttons)
// store the form data as the user types

// differences:
// submit button effect: add a new bear VS update an existing bear
// starting form data: empty to add a bear VS existing bear
// h3: Add a Bear VS Edit Bear

// in how it's displayed, whether it's all the time VS after an edit button gets clicked

function BearForm({ header, initialFormData, submitHandler }) {

  const [formData, setFormData] = useState(initialFormData);
  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // using the prop to pass the information back to the App component
    submitHandler(formData);
    setFormData({ ...initialFormData });
  }
  return <form onSubmit={handleFormSubmit}>
    <h3>{header}</h3>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" value={formData.name} onChange={handleInput} />
    <label htmlFor="imageUrl">Image URL</label>
    <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleInput} />
    <label htmlFor="habitat">habitat</label>
    <input type="text" name="habitat" id="habitat" value={formData.habitat} onChange={handleInput} />
    <input type="submit" />
  </form>
}

export default BearForm;