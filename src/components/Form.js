const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  return (
    <form>
      <input type="text" onChange={ inputTextHandler } className="todo-input" />
      <button type="submit" className="todo-button">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="Complete">Completed</option>
          <option value="Incomplete">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form