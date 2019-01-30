import React from 'react';
import TodoList from '../view/todo-list';
import '../css/app.css';
import TodoItemCreatorContainer from './todoitemcreator-container';
import SummaryComponent from '../view/summary';

const App = () => (
					<div className='container'>
						<TodoItemCreatorContainer/>
						<SummaryComponent />
						<TodoList />
					</div>
				)
export default App;