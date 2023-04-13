import React, { useState } from 'react';
import AddModule from './AddModule';
import Header from './Header';
import ModuleList from './ModuleList';
import './App.css';

function App() {
  const [modules, setModules] = useState([
    {
      number: 18,
      dueDate: 'Apr 7',
      title: 'Frontend foundations',
      completed: false
    },
    {
      number: 19,
      dueDate: 'Apr 7',
      title: 'CSS frameworks',
      completed: false
    },
    {
      number: 20,
      dueDate: 'Apr 7',
      title: 'JavaScript and the DOM',
      completed: false
    },
    {
      number: 21,
      dueDate: 'Apr 14',
      title: 'Rendering with React',
      completed: false
    },
    {
      number: 22,
      dueDate: 'Apr 14',
      title: 'React state management',
      completed: false
    },
  ]);
  function setModuleComplete(moduleToMarkComplete) {
    // to set that module is complete,
    // go through all of the modules
    // if that module is the one we want to change,
    // make a new object where completed is true
    // else, just include the same module
    console.log('marking module complete', module)
    let newModulesArray = modules.map(module => module === moduleToMarkComplete ?
      { ...module, completed: true } :
      module);
    setModules(newModulesArray);
  }
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  function incrementNumberOfClicks() {
    setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
  }
  function addModule(newModule) {
    setModules([
      ...modules,
      newModule
    ])
  }
  return (
    <div className="App">
      <Header numberOfModules={modules.length} numberOfClicks={numberOfClicks} incrementNumberOfClicks={incrementNumberOfClicks} />
      <AddModule addModule={addModule} />
      <ModuleList modules={modules} numberOfClicks={numberOfClicks} setModuleComplete={setModuleComplete} />
    </div>
  );
}

export default App;
