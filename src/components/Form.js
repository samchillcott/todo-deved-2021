const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputText,
        complete: false,
        id: Math.random() * 1000
      }
    ])
    setInputText("")
  }

  return (
    <form>
      <input
        type="text"
        value={ inputText }
        onChange={ inputTextHandler }
        className="todo-input"
      />
      <button type="submit" onClick={ submitTodoHandler } className="todo-button">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  )
}

export default Form