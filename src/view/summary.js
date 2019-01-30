import React, { Component } from 'react'
import { ButtonGroup, Button } from 'reactstrap';
import '../css/summary.css';
import { connect } from 'react-redux';

class SummaryComponent extends Component{
	filterCond(flag) {
		this.props.setFilter(flag);
	}
	render() {
		return (
			<ButtonGroup>
				<Button onClick={() => this.filterCond()}>All <strong>{this.props.todos.length}</strong></Button>
				<Button onClick={() => this.filterCond(true)}>Completed <strong>{this.props.todos.length}</strong></Button>
				<Button onClick={() => this.filterCond(false)}>To be completed <strong>{this.props.todos.length}</strong></Button>
			</ButtonGroup>
		)
	}
}

export default connect(state => ({
	todos: state
}))(SummaryComponent);