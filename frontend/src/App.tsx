import { FormEventHandler, useEffect, useState } from 'react'

import './App.css';
import Task from "./component/Task";
import { Todo } from "./types/Todo";
import { CreateTodo } from "./types/CreateTodo";
import { getTodos, createTodo, deleteTodo } from  "./module/api";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [createState, setCreateState] = useState<CreateTodo>({title: "", description:"", finished:0})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    const responseTodo: Todo = await createTodo(createState);
    setTodos([...todos, responseTodo]);
    setCreateState({title: "", description: "", finished: 0})
    setIsSubmitting(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setCreateState({ ...createState, [name]: value });
  };
  
  const deleteHandler = async (id: number) => {
    const response = await deleteTodo(id);
    if (response.code === 200) {
      setTodos([...todos].filter(todo => todo.id !== id))
    }
  }

  return (
    <div className="container">
      <div className="m-2 p-2 border rounded">
        <span className="m-2">create new Todo</span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-start" htmlFor="title">title</label>
            <input id="title" name="title" value={createState.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-start" htmlFor="description">description</label>
            <textarea id="description" name="description" value={createState.description} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <input type="submit" value={isSubmitting ? 'Creating...' : 'Create'} disabled={isSubmitting} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"/>
        </form>
      </div>
      
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <Task todo={todo} deleteHandler={deleteHandler} />
        ))}
      </ul>
    </div>
  )
}

export default App
