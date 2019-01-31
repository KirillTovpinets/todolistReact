import * as constants from '../constants';

export const selectTodos = state => state.todoReducer
export const selectFilter = state => state.completedFilterReducer
export const filteredTodo = state => selectTodos(state)
	.filter((item) => {
		switch (selectFilter(state)) {
			case constants.dictionary.completed:
				return item.completed;
			case constants.dictionary.incompleted:
				return !item.completed;
			default:
				return item;
		}
	})
export const getSummary = state => selectTodos(state)
	.reduce((acc, item, arr) => {
		if (item.completed) {
			acc.completed = (acc.completed + 1) || 1
		} else {
			acc.incompleted = (acc.incompleted + 1) || 1
		}
		acc.all = (acc.all + 1) || 1
		return acc
	}, {})