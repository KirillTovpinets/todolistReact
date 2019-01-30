import { combineReducers } from 'redux';
import todoReducer from './todos';
import completedFilterReducer from './completedFilter';

export default combineReducers({
    todoReducer,
    completedFilterReducer
})
