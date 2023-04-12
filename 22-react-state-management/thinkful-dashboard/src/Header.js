import React, { useState } from 'react';

// a React component is a function that returns some HTML to be displayed on the page
function Header({ numberOfModules, numberOfClicks, incrementNumberOfClicks }) {
  let schoolName = 'Thinkful';
  // wishful thinking... we have to use state variables for anything that gets updated
  // let numberOfClicks = 0;
  //    variable          setter for variable        initial value
  
  return (
    <header>
      <h1 className="school-name" onClick={incrementNumberOfClicks}>{schoolName}</h1>
      <h2>The coolest school. You have clicked {numberOfClicks} times.</h2>
      <h2>There are {numberOfModules} modules.</h2>
    </header>
  )

}

// export the component so it can be imported in another file
export default Header;
