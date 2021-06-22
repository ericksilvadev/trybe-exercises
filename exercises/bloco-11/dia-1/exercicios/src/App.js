import Task from './Tasks';

const tasks = ['Acordar', 'Estudar', 'Almoçar', 'Sonequinha'];

function App() {
  return (
    <ul>{tasks.map((task) => Task(task))}</ul>
  );
}

export default App;
