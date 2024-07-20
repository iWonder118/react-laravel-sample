import { MouseEventHandler, useEffect, useState } from 'react'

import './App.css'
import { Todo } from "./types/Todo"
import { getTodos } from  "./module/api"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [discriptionState, setDiscriptionState] = useState<Boolean[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoData = await getTodos();
        setTodos(todoData);
        setDiscriptionState(new Array(todoData.length).fill(false))
      } catch (e) {
        console.error('Error while fetching todos:', e);
      }
    }
    fetchTodos();
  }, []);

  const showDiscription = (index: number) => {
    const newDiscriptionState: Boolean[] = [...discriptionState];
    newDiscriptionState[index] = !newDiscriptionState[index];
    setDiscriptionState(newDiscriptionState);
  }
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo: Todo, index: number) => (
          <li className={todo.finished ? "done" : ""} key={todo.id} onClick={() => {showDiscription(index)}}>
            {todo.title}
            {discriptionState[index] ? 
            <div>
              {todo.description?? "詳細なし"}
            </div> :  ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
