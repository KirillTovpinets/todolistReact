import React, { Component } from 'react'
import { ButtonGroup, Button } from 'reactstrap';
import '../css/summary.css';
import { connect } from 'react-redux';
import * as constants from '../actions';
import * as select from '../selectors';

class SummaryComponent extends Component{
	filterCond(flag) {
		this.props.setFilter(flag);
	}
	render() {
		const { selectCompleted, selectIncompled, selectAll, summary} = this.props;
		return (
			<ButtonGroup>
				<Button onClick={selectAll}>All <strong>{summary.all || 0}</strong></Button>
				<Button onClick={selectCompleted}>Completed <strong>{summary.completed || 0}</strong></Button>
				<Button onClick={selectIncompled}>To be completed <strong>{summary.incompleted || 0}</strong></Button>
			</ButtonGroup>
		)
	}
}

export default connect(state => ({
	todos: select.filteredTodo(state),
	summary: select.getSummary(state)
}), {
	selectAll: constants.showAll,
	selectCompleted: constants.showCompleted,
	selectIncompled: constants.showIncompleted
})(SummaryComponent);