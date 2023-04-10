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
  return (
    <div className="App">
      <Header />
      <ModuleList modules={modules} />
    </div>
  );
}

export default App;
