import React, { Component } from 'react';
import TodoItem from './todo-item';
import { ListGroup } from 'reactstrap';

class TodoList extends Component{

	render() {
		return (<ListGroup className='todo-list'>
						{ this.props.todoItems.map((el) =>  <TodoItem key={el.id} 
																								text={el.text} 
																								handleChangeStatus={() => this.props.changeStatus(el.id)}
																								editTodo={(env) => this.props.editTodo(el.id, env.target.value)}
																								deleteTodo={() => this.props.deleteTodo(el.id)}
																								completed={el.completed} />) }
						</ListGroup>)
	};
};

export default TodoList;