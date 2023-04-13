import React from 'react';
import Module from './Module';

function ModuleList({ modules, numberOfClicks, setModuleComplete }) {
  let fruits = ['apple', 'banana', 'cantaloupe', 'dragonfruit'];
  return <div>
    <h3>Modules</h3>

    <h4>{numberOfClicks} clicks</h4>
    {modules.map(module => <Module module={module} setModuleComplete={setModuleComplete} key={module.number} />)}
    <ul>
      {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
    {/* add in a UL that contains LI's for all the fruits */}

  </div>
}

export default ModuleList;


// let fruits = ['apple', 'banana', 'cantaloupe', 'dragonfruit'];
// Write some code including a map that renders an unordered list of fruits
// some helpful tags might be ul and li

// a ul that contains a bunch of li's
// you probably make those li's by mapping over the fruits array


// map over the fruits array to make the fruits plural


// A
// fruits.map((fruit)=>{
//   return fruit+='s'
// })
// B
// fruits.map(fruit=>fruit+"s")
// C
// fruits.map(fruit=>{return fruit +"s"})
// D
// const fruits = fruit.map(fruit => {
//   return fruit += "s"
// })
// E
// fruits.map(fruit=>{
//   return `${fruit}s`
// })

// F
// fruits.map(fruit => `${fruit}s`)

// ['<li>apple</li>', '<li>banana</li>'...]

// in JS, we use template literals
// fruits.map(fruit => `<li> ${fruit}</li>`)
// in JSX, no template literals, just use HTML tags and it works
// also no money hugs, just curly braces
// fruits.map(fruit => <li>{fruit}</li>)

