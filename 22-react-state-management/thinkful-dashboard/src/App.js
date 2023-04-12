import React, { useState } from 'react';
import Header from './Header';
import ModuleList from './ModuleList';
import './App.css';

function App() {
  const modules = [
    {
      number: 18,
      dueDate: 'Apr 7',
      title: 'Frontend foundations'
    },
    {
      number: 19,
      dueDate: 'Apr 7',
      title: 'CSS frameworks'
    },
    {
      number: 20,
      dueDate: 'Apr 7',
      title: 'JavaScript and the DOM'
    },
    {
      number: 21,
      dueDate: 'Apr 14',
      title: 'Rendering with React'
    },
    {
      number: 22,
      dueDate: 'Apr 14',
      title: 'React state management'
    },
  ]
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  function incrementNumberOfClicks() {
    setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
  }
  return (
    <div className="App">
      <Header numberOfModules={modules.length} numberOfClicks={numberOfClicks} incrementNumberOfClicks={incrementNumberOfClicks} />
      <ModuleList modules={modules} numberOfClicks={numberOfClicks} />
    </div>
  );
}

export default App;
