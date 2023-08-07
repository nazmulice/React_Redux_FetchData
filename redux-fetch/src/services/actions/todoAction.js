import axios from 'axios';
import { getTodo, todoFailed, todoSuccess } from './../constants/contstant';

export const getAllTodo = () => async(dispatch)=>{
    dispatch({ type: getTodo });
    try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch({ type: todoSuccess, payload: res.data });
    } catch (error) {
        dispatch({type: todoFailed, payload: error.message})
    }
}