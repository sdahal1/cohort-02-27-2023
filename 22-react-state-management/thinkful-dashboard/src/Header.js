import React, { useState } from 'react';
import './Header.css';

// a React component is a function that returns some HTML to be displayed on the page
function Header({ numberOfModules, numberOfClicks, incrementNumberOfClicks }) {
  let schoolName = 'Thinkful';
  // state variable for whether the user has already submitted the form
  let [shouldShowForm, setShouldShowForm] = useState(true);
  // state variable to hold the data from the form
  let [name, setName] = useState('');

  // when the form submits, change what's on the page
  let handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    setShouldShowForm(false);
  }

  // update the state variable when the input data changes
  let handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <header>
      <h1 className="school-name" onClick={incrementNumberOfClicks}>{schoolName}</h1>
      <div>
        {
          shouldShowForm ?
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Enter your name</label>
              <input type="text" name="name" id="name" onChange={handleNameChange} />
              <input type="submit" />
            </form>
            :
            <span>Welcome, {name}</span>
        }

      </div>
      <h2>The coolest school. You have clicked {numberOfClicks} times.</h2>
      <h2>There are {numberOfModules} modules.</h2>
    </header>
  )

}

// export the component so it can be imported in another file
export default Header;
