import axios from "axios";

const API_BASE_URL :string = "http://localhost:8000/api";

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

