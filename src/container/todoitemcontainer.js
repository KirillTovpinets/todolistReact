import React from 'react';
import TodoItem from '../view/todo-item';
import * as actions from '../actions';
import { connect } from 'react-redux';

class TodoItemContainer extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			isModifiable: false
		}
	}
	toggleModifiable = () => this.setState({isModifiable: !this.state.isModifiable});

	deleteTodoItem = () => {
		const { deleteTodo, todoItem: { id } } = this.props;
		deleteTodo(id);
	}
	editItem = (e) => {
		const { editTodo, todoItem: {id}} = this.props;
		editTodo(id, e.target.value);
    }
    toggleStatusAct = () => {
        const { toggleStatus, todoItem: {id} } = this.props;
        toggleStatus(id);
    }
    render() {
        return (<TodoItem 
                toggleEdit={this.toggleModifiable}
                toggleStatus={this.toggleStatusAct}
                deleteAct={this.deleteTodoItem}
                edit={this.editItem}
                text={this.props.todoItem.text}
                completed={this.props.todoItem.completed}
                modifiable={this.state.isModifiable}
                />)
    }
}

export default connect(null, {
	deleteTodo: actions.deleteTodo,
	toggleStatus: actions.toggleTodo,
	editTodo: actions.editTodo,
})(TodoItemContainer);