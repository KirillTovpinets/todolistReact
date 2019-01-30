import React from 'react';
import { Input, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import '../css/todolist.css';

class TodoItem extends React.Component {
	render() {
		const { toggleEdit, deleteAct, toggleStatus, edit, modifiable, text, completed } = this.props;
		return (<ListGroupItem color={completed ? 'success' : 'warning'}>
						<div className='todo-item'>
							<Input type="checkbox" checked={completed} onChange={toggleStatus} />
							<Input type="text" onChange={edit} value={text} disabled={modifiable !== false ? null : 'disabled'}/>
						</div>
						<ButtonGroup>
							{modifiable === false && 
								<React.Fragment>
									<Button color='warning' onClick={toggleEdit}>Edit</Button>
									<Button color='danger' onClick={deleteAct}>Delete</Button>
								</React.Fragment>
							}
							{modifiable === true && 
								<React.Fragment>
									<Button color='success' onClick={toggleEdit}>Save</Button>
									<Button color='danger' onClick={toggleEdit}>Cancel</Button>
								</React.Fragment>
							}
						</ButtonGroup>
					</ListGroupItem>);
	}
}

export default TodoItem;