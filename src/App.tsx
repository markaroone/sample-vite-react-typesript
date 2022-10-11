import CreateNewTodoForm from './components/CreateNewTodoForm';
import './App.css';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className='App'>
      <CreateNewTodoForm />
      <TodosList />
    </div>
  );
}

export default App;
