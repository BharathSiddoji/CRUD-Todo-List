import './App.css';
import Todo from './components/Todo';
import {useSelector} from 'react-redux';
function App() {
  const tasks = useSelector((state)=>state.todoReducer)
  return (
    <div className="App">
      <Todo />
      {console.log(taskss)}
    </div>
  );
}

export default App;
