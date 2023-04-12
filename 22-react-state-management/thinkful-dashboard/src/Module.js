import React from 'react';
import './Module.css';

// this param could be called props
// access data like props.number
// but destructuring is cool and fun
function Module({ module }) {

  return <div className="module">
    <h3 className="btn btn-primary">Module {module.number} Complete by {module.dueDate}</h3>
    <h2>{module.title}</h2>
    {/* <Overdue date={module.dueDate} /> */}
    <h3>{module.dueDate === 'Apr 7' ? 'Overdue!!' : 'Due in the future'}</h3>
    {/* conditional using lazy and */}
    {module.dueDate === 'Apr 7' && <h4>do this work soon!!</h4>}
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
