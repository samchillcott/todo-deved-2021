import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.complete === true))
        break
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.complete === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <Form
          inputText={ inputText }
          setInputText={ setInputText }
          todos={ todos }
          setTodos={ setTodos }
          setStatus={ setStatus }
        />
        <TodoList
          todos={ todos }
          setTodos={ setTodos }
        />

      </header>
    </div>
  );
}

export default App;
