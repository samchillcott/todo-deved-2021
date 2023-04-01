import React from 'react'

const Form = () => {
  return (
    <form action="">
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
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