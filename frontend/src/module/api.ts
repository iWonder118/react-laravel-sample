import axios from "axios";
import { Todo } from "../types/Todo";
import { CreateTodo } from "../types/CreateTodo";
import { UpdateTodo } from "../types/UpdateTodo";

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
        console.error('Error while create todos:', e);
        throw e;
    }
}

export const updateTodo = async (todo: UpdateTodo) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/todos`, todo);
        console.log(response);
        return response.data.todo;
    } catch (e) {
        console.error('Error while update todos:', e);
        throw e;
    }
}

export const deleteTodo = async (id: number) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/todos`, {data: {id: id}});
        console.log(response);
        return response.data;
    } catch (e) {
        console.error('Error while update todos:', e);
        throw e;
    }
}
