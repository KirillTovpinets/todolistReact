import React, { Component } from 'react'
import { ButtonGroup, Button } from 'reactstrap';

export default class SummaryComponent extends Component{
	filterCond(flag) {
		this.props.setFilter(flag);
	}
	render() {
		return (
			<ButtonGroup>
				<Button onClick={() => this.filterCond()}>All <strong>{this.props.all}</strong></Button>
				<Button onClick={() => this.filterCond(true)}>Completed <strong>{this.props.completedItems}</strong></Button>
				<Button onClick={() => this.filterCond(false)}>To be completed <strong>{this.props.all - this.props.completedItems}</strong></Button>
			</ButtonGroup>
		)
	}
}
