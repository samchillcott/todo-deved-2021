import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Sam's Todo List</h1>
        <Form
          inputText={ inputText }
          setInputText={ setInputText }
          todos={ todos }
          setTodos={ setTodos }
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
