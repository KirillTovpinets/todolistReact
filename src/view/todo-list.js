import React, { Component } from 'react';
import TodoItemContainer from '../container/todoitemcontainer';
import { ListGroup } from 'reactstrap';
import { connect } from 'react-redux';
import * as select from '../selectors';

class TodoList extends Component{

	render() {
		return (<ListGroup className='todo-list'>
						{ this.props.todoItems.map((el) =>  <TodoItemContainer key={el.id} todoItem={el}/>) }
				</ListGroup>)
	};
};

export default connect(
	state => ({ todoItems: select.filteredTodo(state)})
)(TodoList);