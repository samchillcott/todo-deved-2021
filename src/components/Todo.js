import React from 'react'

const Todo = ({ text, id, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    // console.log(e);
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  return (
    <div className='todo'>
      <li className='todo-item'>{ text }</li>
      <button className='complete-button'>
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