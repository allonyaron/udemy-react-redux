import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// TODO - Move api key to safe place to distribute
const API_KEY = 'AIzaSyAb7EHP4pa1t-eJE5FjquCGmiZx0Y3x82Y';

const App = () => {
	// For multiline jsx it is usually wrapped in prentheses - 
	// otherwise first div needs to be on return line or it will error
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));


