import * as constants from '../constants';
const initialState = [];

function createTodo (todos, text) {
    const lastid = todos[todos.length - 1];
    const newId = (lastid && lastid.id + 1) || 0 ;
    return { id: newId, text, completed: false };
}
export default function todoReducer (state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TODO:
            return state.concat(createTodo(state, action.payload));
        case constants.EDIT_TODO:
            return state.map(
                (el) =>  el.id === action.payload.id
                    ? {...el, text: action.payload.text}
                    : el)
        case constants.TOGGLE_TODO:
            return state.map(
                (el) =>  el.id === action.payload
                    ? {...el, completed: !el.completed}
                    : el)
        case constants.DELETE_TODO:
            return state = state.filter(el => el.id !== action.payload);
        default:
            return state;
    }
}