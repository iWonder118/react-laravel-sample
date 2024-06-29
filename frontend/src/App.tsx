import { useEffect, useState } from 'react'

import './App.css'
import { Todo } from "./types/Todo"
import { getTodos } from  "./module/api"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoData = await getTodos();
        setTodos(todoData);
      } catch (e) {
        console.error('Error while fetching todos:', e);
      }
    }
    fetchTodos();
  }, []);


  return (
    <div className="container">
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
