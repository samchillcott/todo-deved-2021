import React from 'react'
// import FontAwesomeIcon from "@fortawesome/fontawesome-free"
// import faPlus from "@fortawesome/fontawesome-free"

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-button">
        {/* <FontAwesomeIcon icon={ faPlus } /> */}
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