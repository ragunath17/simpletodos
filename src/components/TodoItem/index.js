import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    const {todo} = this.props
    this.state = {newTitle: todo.title, isEdit: false}
  }

  onChangeNewTitle = event => {
    this.setState({newTitle: event.target.value})
  }

  toggleEdit = () => {
    this.setState(prevState => ({isEdit: !prevState.isEdit}))
  }

  saveTitle = () => {
    const {onClickEdit, todo} = this.props
    const {newTitle} = this.state
    onClickEdit(todo.id, newTitle)
    this.toggleEdit()
  }

  render() {
    const {todo, onDelete} = this.props
    const {isEdit, newTitle} = this.state
    const editOrSaveBtn = isEdit ? 'Save' : 'Edit'
    const editClassname = isEdit ? 'save-btn' : 'edit-btn'
    return (
      <li className="todo-item">
        <input type="checkbox" />
        {isEdit ? (
          <>
            <input value={newTitle} onChange={this.onChangeNewTitle} />
          </>
        ) : (
          <p className="title">{todo.title}</p>
        )}

        <button
          type="button"
          onClick={this.toggleEdit}
          className={editClassname}
        >
          {editOrSaveBtn}
        </button>
        <button type="button" className="btn" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
