import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// TODO - Move api key to safe place to distribute
const API_KEY = 'AIzaSyAb7EHP4pa1t-eJE5FjquCGmiZx0Y3x82Y';





class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});

	}
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));


