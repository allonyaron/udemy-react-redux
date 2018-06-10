import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		// FOR INITIAL LOAD WHEN state is null
		if(!this.props.book) {
			return <div>Please Select a Book</div>;
		}

		return (
				<div>
					<h3>Details for:</h3>
					<div>{this.props.book.title}</div>
				</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);