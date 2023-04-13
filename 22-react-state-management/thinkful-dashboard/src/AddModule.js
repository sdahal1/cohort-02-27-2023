import React, { useState } from 'react';

function AddModule({ addModule }) {
  // {
  //   number: 18,
  //   dueDate: 'Apr 7',
  //   title: 'Frontend foundations',
  //   completed: false
  // }
  // set up the form data with default values
  const defaultFormData = {
    number: 0,
    dueDate: '2023-04-21',
    title: '',
    completed: false
  };
  const [formData, setFormData] = useState(defaultFormData);
  // update the form data whenever 
  function handleInput(event) {
    // commented out version does the same work as the commented-in version
    // make a new object with all the data from the old object
    // let newFormData = {...formData};
    // update one piece of data using the event target
    // newFormData[event.target.name] = event.target.value;
    // set the state variable using that new object
    // setFormData(newFormData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  function handleCheckboxInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    })
  }
  // when the form is submitted, pass the data back up to the App component using the addModule function
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    addModule(formData);
    // clear out the form, by setting all the data back to the default
    setFormData({
      ...defaultFormData
    })
  }
  return <div>
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="number">Number</label>
      <input type="number" id="number" name="number" value={formData.number} onChange={handleInput} />
      <label htmlFor="dueDate">Due date</label>
      <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleInput} />
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleInput} />
      <label htmlFor="completed">Completed?</label>
      <input type="checkbox" id="completed" name="completed" checked={formData.completed} onChange={handleCheckboxInput} />
      <input type="submit" />
    </form>
  </div>
}

export default AddModule;
