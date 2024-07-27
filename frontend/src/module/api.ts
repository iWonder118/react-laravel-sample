import axios from "axios";
import { Todo } from "../types/Todo";
import { CreateTodo } from "../types/CreateTodo";

const API_BASE_URL :string = "http://localhost/api";

export const getTodos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/todos`);
        console.log(response);
        return response.data.todos;
    } catch (e) {
        console.error('Error while fetching todos:', e);
        throw e;
    }
}

export const createTodo = async (todo: CreateTodo) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/todos`, todo);
        console.log(response);
        return response.data.todo;
    } catch (e) {
        console.error('Error while fetching todos:', e);
        throw e;
    }
}
