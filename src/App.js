import './App.css';
import Todo from './components/Todo';
import TodoTasks from './components/TodoTasks';
import {useSelector} from 'react-redux';
function App() {
  const tasks = useSelector((state)=>state.todoReducer)
  return (
    <div className="App">
      <Todo />
     
    </div>
  );
}

export default App;
