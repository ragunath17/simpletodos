// Write your code here
/*
import './index.css'

const UserTodos = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <h1 className="title">{title}</h1>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default UserTodos
*/

import './index.css'

const TodoItem = props => {
  const {todo, onDelete} = props
  return (
    <li className="todo-item">
      <p className="title">{todo.title}</p>
      <button type="button" className="btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
