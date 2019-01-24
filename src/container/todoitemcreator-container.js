import React, { Component } from 'react'
import TodoItemCreator from '../view/todo-item-creator';

class TodoItemCreatorContainer extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}

	addItemAction = () => {
		this.props.addToItemHandler(this.state.text);
		this.clearField();
	}
	handleChangeAction = (event) => {
		this.setState({text: event.target.value});
	}
	clearField = () => {
		this.setState({text: ''});
	}
	handleKeyPress = (event) => {
		if (this.state.text !== '' && event.charCode === 13) {
			this.addItemAction();
		}
	}
	render() {
		return (
			<TodoItemCreator 
				handleChange={this.handleChangeAction} 
				value={this.state.text} 
				handlePress={this.handleKeyPress}
				addItemHandler={this.addItemAction}/>
		)
	}
}

export default TodoItemCreatorContainer;