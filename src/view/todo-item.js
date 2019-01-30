import React from 'react';
import { Input, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import '../css/todolist.css';

class TodoItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isModifiable: false
		}
	}
	toggleModifiable = () => this.setState({isModifiable: !this.state.isModifiable});

	render() {
		const {text, completed=false, handleChangeStatus} = this.props;
		return (<ListGroupItem color={completed ? 'success' : 'warning'}>
						<div className='todo-item'>
							<Input type="checkbox" checked={completed} onChange={handleChangeStatus} />
							<Input type="text" onChange={this.props.editTodo} value={text} disabled={this.state.isModifiable !== false ? null : 'disabled'}/>
						</div>
						<ButtonGroup>
							{this.state.isModifiable === false && 
								<React.Fragment>
									<Button color='warning' onClick={() => this.setState({isModifiable: !this.state.isModifiable})}>Edit</Button>
									<Button color='danger' onClick={this.props.deleteTodo}>Delete</Button>
								</React.Fragment>
							}
							{this.state.isModifiable === true && 
								<React.Fragment>
									<Button color='success' onClick={this.toggleModifiable}>Save</Button>
									<Button color='danger' onClick={this.toggleModifiable}>Cancel</Button>
								</React.Fragment>
							}
						</ButtonGroup>
					</ListGroupItem>);
	}
}

export default TodoItem;