import { v4 as uuidv4 } from 'uuid'
import { CREATE_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETED } from './types'

export const createTodo = (todo) => {
    return {
        type: CREATE_TODO,
        payload: {
            todoText: todo,
            completed: false,
            id: uuidv4()
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const toggleCompleted = (todo) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: todo
    }
}

export const editTodo = (todo, eventText) => {
    console.log(eventText)
    console.log(todo.id)
    return {
        type: EDIT_TODO,
        payload: {
            todo,
            updated: eventText
        }
    }
}
