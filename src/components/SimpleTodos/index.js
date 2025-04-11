import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  state = {
    todos: initialTodosList,
    newTodo: '',
    count: 1,
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }))
  }

  onClickEdit = (id, newTitle) => {
    const {todos} = this.state
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? {...todos, title: newTitle} : todos,
      ),
    }))
    console.log('onclick edit called')
  }

  onChangeInput = event => {
    this.setState({newTodo: event.target.value})
  }

  onAddTodo = () => {
    const {todos, newTodo, count} = this.state
    for (let i = 0; i < count; i) {
      todos.push({id: uuidv4(), title: newTodo, completed: false})
    }

    this.setState({todos, newTodo: '', count: 1})
  }

  onChangeCount = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {todos, newTodo, count} = this.state
    console.log(todos)
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="todos-heading">Simple Todos</h1>
          <div className="title-input-container">
            <input
              type="text"
              className="title-input"
              onChange={this.onChangeInput}
              placeholder="Enter Todo Title"
              value={newTodo}
            />
            <input
              className="number-input"
              type="number"
              min="1"
              value={count}
              onChange={this.onChangeCount}
            />
            <button type="button" onClick={this.onAddTodo} className="add-btn">
              Add
            </button>
          </div>
          <ul className="list-container">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={this.deleteTodo}
                onClickEdit={this.onClickEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
