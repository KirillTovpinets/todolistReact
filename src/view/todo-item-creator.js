import React, { Fragment } from 'react';
import { Button, InputGroup, InputGroupAddon, Label, Input } from 'reactstrap';
import '../css/item-creator.css';
import PropTypes from "prop-types";

const  TodoItemCreator = ({value, handleChange, addItemHandler, handlePress}) => {
		return (
				<Fragment>
					<Label for='todoitem'>Todo</Label>
					<InputGroup> 
						<Input type='text' 
										name='todoitem' 
										id='todoitem' 
										onChange={handleChange}
										onKeyPress={handlePress}
										placeholder='enter your todo item' 
										value={value}/>
						<InputGroupAddon addonType='append'>
							<Button color='success' onClick={addItemHandler}>Add task</Button>
						</InputGroupAddon>
					</InputGroup>
				</Fragment>
		);
}
TodoItemCreator.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	addItemHandler: PropTypes.func.isRequired
}
export default TodoItemCreator;