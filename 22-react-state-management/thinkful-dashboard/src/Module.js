import React from 'react';
import './Module.css';


// warmup question
// What is an event listener? How do we set one up (in English, not in JS)?
// Event listeners are functions that we set up to fire when some event happens (keypress, click, etc)
// Which element on the page are we listening for the event?
// Which event are we listening for on that element?
// What should we do when that event happens? (this is the code in the function)
// In vanilla JS, document.querySelector('#myCoolElement').addEventListener('click', () => { code })

// this param could be called props
// access data like props.number
// but destructuring is cool and fun
function Module({ module, setModuleComplete }) {

  return <div className="module">
    <h3>Module {module.number} Complete by {module.dueDate}</h3>
    <h2>{module.title}</h2>
    {/* <Overdue date={module.dueDate} /> */}
    <h3>{module.dueDate === 'Apr 7' ? 'Overdue!!' : 'Due in the future'}</h3>
    {/* conditional using lazy and */}
    {module.dueDate === 'Apr 7' && <h4>do this work soon!!</h4>}
    <h4>{
      module.completed ?
        'Complete' :
        <>
          Incomplete
          <button className="btn btn-primary" onClick={() => setModuleComplete(module)}>Mark completed</button>
        </>
    }</h4>
  </div>
}

// ternaries are WTF
// What ? True : False
// function Overdue({ date }) {
//   if (date === 'Apr 7') {
//     return <h3>Overdue!!</h3>
//   } else {
//     return <h3>Due in the future</h3>
//   }
//   // return <h3>{date}</h3>
// }

export default Module;
