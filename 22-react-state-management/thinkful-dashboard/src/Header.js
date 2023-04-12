import React from 'react';

// a React component is a function that returns some HTML to be displayed on the page
function Header({ numberOfModules }) {
  let schoolName = 'Thinkful';
  return (
    <header>
      <h1 className="school-name" style={{ color: 'white' }}>{schoolName}</h1>
      <h2>The coolest school</h2>
      <h2>There are {numberOfModules} modules.</h2>
    </header>
  )

}

// export the component so it can be imported in another file
export default Header;
