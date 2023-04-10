import React from 'react';

// a React component is a function that returns some HTML to be displayed on the page
function Header() {
  let schoolName = 'Thinkful';
  return (
    <React.Fragment>
      <h1 className="school-name">{schoolName}</h1>
      <h2>The coolest school</h2>
    </React.Fragment>
  )

}

// export the component so it can be imported in another file
export default Header;
