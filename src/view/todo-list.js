import React, { Component } from 'react';
import TodoItem from './todo-item';
import { ListGroup } from 'reactstrap';

class TodoList extends Component{

	changeStatus = (id) => {
		this.props.changeStatus(id);
	}
	render() {
		return (<ListGroup className='todo-list'>
		{ this.props.todoItems.map((el) =>  <TodoItem key={el.id} 
																				text={el.text} 
																				handleChangeStatus={(task) => this.changeStatus(el.id)}
																				completed={el.completed} />) }
		</ListGroup>)
	};
};

export default TodoList;