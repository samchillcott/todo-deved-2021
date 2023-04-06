import React, { useState } from 'react'

const Todo = ({ text, id, todos, setTodos, todo }) => {
  const [editMode, setEditMode] = useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map((item => {
      if (item.id === todo.id) {
        return {
          ...item, complete: !item.complete
        }
      }
      return item
    })))
  }

  const editHandler = () => { setEditMode(true) }

  return (
    <div className='todo'>
      <li className={ `todo-item ${todo.complete ? "complete" : ""}` }>
        { text }
      </li>
      <button
        className='edit-btn'
        onClick={ editHandler }
      >
        <i className='fas fa-edit'></i>
      </button>
      <button
        className='complete-btn'
        onClick={ completeHandler }
      >
        <i className='fas fa-check'></i>
      </button>
      <button
        className='trash-btn'
        onClick={ deleteHandler }
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Todo