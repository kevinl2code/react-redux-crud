import { CREATE_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETED } from '../actions/types'


const todoReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:
            return [ ...state, action.payload ];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case TOGGLE_COMPLETED:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !action.payload.completed}
                }
                return todo
            })
        case EDIT_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.todo.id) {
                    return { ...todo, todoText: action.payload.updated}
                }
                return todo
            })
        default:
            return state
    }
}

export default todoReducer