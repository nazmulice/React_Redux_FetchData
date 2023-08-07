import { getTodo, todoFailed, todoSuccess } from "../constants/contstant"

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case getTodo:
            return {
                ...state,
                isLoading:true
            }
        case todoSuccess:
            return {
                isLoading: false,
                todos: action.payload,
                error: null,
            }
        case todoFailed:
            return {
                isLoading: false,
                todos: [],
                error: action.payload,
            }
        default:
            return state
    }
}

export default todoReducer;