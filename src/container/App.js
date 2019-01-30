import React, { Component } from 'react';
import TodoList from '../view/todo-list';
import '../css/app.css';
import TodoItemCreatorContainer from './todoitemcreator-container';
import SummaryComponent from '../view/summary';

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			todoItems: [],
			textFilter: '',
			filterFunction: (el) => el,
		}
	}
	addItemHandler = (text) => {
		this.setState({
			...this.state,
			todoItems: [...this.state.todoItems, {
				id: this.state.todoItems.length + 1, 
				text,
				completed: false,
			}],
			textFilter: ''
		})
	}
	changeStatusHandler = (id) => {
		const task = this.state.todoItems.find((el) => el.id === id);
		task.completed = !task.completed;
		this.setState({
			...this.state,
			task
		})
	}
	editTodo = (id, text) => {
		const task = this.state.todoItems.find((el) => el.id === id);
		task.text = text;
		this.setState({...this.state})
	}
	filterTasks = (completed) => {
		let filterFunction;
		if (completed === undefined) {
			filterFunction = (el) => el;
		} else {
			filterFunction = (el) => el.completed === completed
		}
		this.setState({
			...this.state,
			filterFunction
		})
	}
	textFilter = (text) => {
		this.setState({
			...this.setState,
			textFilter: text
		})
	}
	deleteTodo = (id) => {
		const newTodos = this.state.todoItems.filter((el) => el.id !== id);
		this.setState({...this.state, todoItems: newTodos})
	}
	render() {
		return (
			<div className='container'>
				<TodoItemCreatorContainer addToItemHandler={this.addItemHandler} filter={this.textFilter}/>
				<SummaryComponent all={this.state.todoItems.length}
													setFilter={this.filterTasks}
													completedItems={this.state.todoItems.filter((el) => el.completed).length}>
				</SummaryComponent>
				<TodoList 
					todoItems={this.state.todoItems.filter(this.state.filterFunction).filter(el => el.text.includes(this.state.textFilter))}
					completedItems={this.state.todoItems.filter((el) => el.completed)}
					changeStatus={this.changeStatusHandler}
					handleChangeItem={this.handleChangeItem}
					deleteTodo={this.deleteTodo}
					editTodo={this.editTodo}/>
			</div>
		)
	}
}


export default App;