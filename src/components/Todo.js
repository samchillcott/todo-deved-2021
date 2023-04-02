import React from 'react'

const Todo = ({ text, id, todos, setTodos, todo }) => {
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

  return (
    <div className='todo'>
      <li className={ `todo-item ${todo.completed ? "complete" : ""}` }>
        { text }
      </li>
      <button
        className='complete-button'
        onClick={ completeHandler }
      >
        <i className='fas fa-check'></i>
      </button>
      <button
        className='trash-button'
        onClick={ deleteHandler }
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Todo