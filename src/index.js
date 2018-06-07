import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// TODO - Move api key to safe place to distribute
const API_KEY = 'AIzaSyAb7EHP4pa1t-eJE5FjquCGmiZx0Y3x82Y';





class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// add default selected video
			this.setState({ 
				videos:videos, 
				selectedVideo: videos[0]
			});
		});		
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));


