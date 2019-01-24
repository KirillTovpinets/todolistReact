import React from 'react';
import { Input, ListGroupItem } from 'reactstrap';
import '../css/todolist.css';
const TodoItem = ({text, completed=false, handleChangeStatus}) => {
	return (<ListGroupItem color={completed ? 'success' : 'warning'}>
						<Input type="checkbox" checked={completed} onChange={handleChangeStatus} />
						<span>{text}</span>
					</ListGroupItem>);
}

export default TodoItem;