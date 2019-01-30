import * as constants from '../constants';

export const addTodo = text => ({type: constants.ADD_TODO, payload: text});
export const editTodo = (id, text) => ({
    type: constants.EDIT_TODO,
    payload: {id, text}
})
export const deleteTodo = id => ({
    type: constants.DELETE_TODO,
    payload: id
})

export const toggleTodo = id => ({type: constants.TOGGLE_TODO, payload: id});