'use strict';

// the data that we want to render to the page
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

console.log(modules);

const renderOneModule = (module) => {
  return `<div class="module">
    <p>Module ${module.number} Complete by ${module.dueDate}</p>
    <h2>${module.title}</h2>
  </div>`
}

// console.log(renderOneModule(modules[0]));

const renderedModules =
  modules.map(renderOneModule);
console.log(renderedModules);

// put the rendered modules on the page
const modulesDiv = document.querySelector('#modules');
modulesDiv.innerHTML = renderedModules.join('');