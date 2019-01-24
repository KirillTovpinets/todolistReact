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
			filterFunction: (el) => el,
		}
	}
	addItemHandler = (text) => {
		this.setState({
			todoItems: [...this.state.todoItems, {
				id: this.state.todoItems.length + 1, 
				text,
				completed: false
			}]
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
	render() {
		return (
			<div className='container'>
				<TodoItemCreatorContainer addToItemHandler={this.addItemHandler}/>
				<SummaryComponent all={this.state.todoItems.length}
													setFilter={this.filterTasks}
													completedItems={this.state.todoItems.filter((el) => el.completed).length}>
				</SummaryComponent>
				<TodoList 
					todoItems={this.state.todoItems.filter(this.state.filterFunction)}
					completedItems={this.state.todoItems.filter((el) => el.completed)}
					changeStatus={this.changeStatusHandler}/>
			</div>
		)
	}
}


export default App;