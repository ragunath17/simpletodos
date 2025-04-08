/*
import {Component} from 'react'
import './index.css'
import UserTodos from '../TodoItem'
*/

import {Component} from 'react'
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

// Write your code here
/*
class App extends Component {
  state = {todosList: initialTodosList}

  deleteUser = id => {
    const {todosList} = this.state
    const filteredTodo = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodo})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="todos-heading">Simple Todos</h1>
          <ul className="list-container">
            {todosList.map(todo => (
              <UserTodos
                key={todo.id}
                todo={todo.title}
                onDelete={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
*/

class SimpleTodo extends Component {
  state = {
    todos: initialTodosList,
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }))
  }

  render() {
    const {todos} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="todos-heading">Simple Todos</h1>
          <ul className="list-container">
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onDelete={this.deleteTodo} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
