import React, { Component } from 'react';
//React needs to be imported into all files using jsx since it's transpiled into react js code

// functional component
// const SearchBar = () => {
// 	return <input />;
// };

class SearchBar extends Component {
	constructor(props) {
		super(props);
// this.state is only used in a constructor to initialize it
// anywhere else outside the constructor it's this.setState
		this.state = { term: '' };
	}
	// using this.setState is what will make react rerender
	render() {
		return (
			<div>
				<input 
				value = {this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}


// FIX THIS
	// every react component that is class based has to have a redner method
	// render() {
	// 	return <input onChange={this.onInputChange}/>;
	// }

	// onInputChange(event) {
	// 	// never update this.state directly - use this.setState
	// 	this.setState({ term: event.target.value });
	// }

}


export default SearchBar;