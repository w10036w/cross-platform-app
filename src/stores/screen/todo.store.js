import { createContext } from 'react'
import { decorate, observable, computed } from 'mobx'

export class Todos {
  todos = [
    { id: 1, text: 'Buy eggs', completed: true },
    { id: 2, text: 'Write a post', completed: false },
  ]

  get remainingTodos() {
    return this.todos.filter(t => !t.completed).length
  }

  toggleTodo = index => {
    this.todos[index].completed = !this.todos[index]
      .completed
  }
}

decorate(Todos, {
  todos: observable,
  remainingTodos: computed,
})

export default createContext(new Todos())

// usage
// https://codesandbox.io/s/3kmkj56qm?from-embed
// import React, { useContext } from 'react'
// import ReactDOM from 'react-dom'
// import { observer } from 'mobx-react-lite'

// import TodoStore from './TodoStore'
// import TodoList from './components/TodoList'
// import Footer from './components/Footer'
// import './styles.css'

// export const App = observer(() => {
//   const store = useContext(TodoStore)
//   return (
//     <div className="App">
//       <h2>A Todo App yet again!</h2>
//       <TodoList
//         todos={store.todos}
//         toggleTodo={store.toggleTodo}
//       />
//       <Footer
//         remaining={store.remainingTodos}
//         total={store.todos.length}
//       />
//     </div>
//   )
// })
