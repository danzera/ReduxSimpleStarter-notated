// Tell transpiler to give this file access to React.
import React, { Component } from 'react'; // Goes and gets dependency/library named 'react' and assigns it to a variable named 'React'
// Original React library has diverged into two separate libraries.
// React (core) library knows how to work with React components -- how to render them, nest them togeter...
import ReactDOM from 'react-dom'; // ReactDOM library knows how to actually render the components to the DOM (insert them into the DOM)
// import youtube-api-search npm package for ease of making calls to the YouTube API
// youtube-api-search pkg makes use of the axios npm pkg, which is a "promise based HTTP client for the browser and Node.js"
// https://www.npmjs.com/package/youtube-api-search
// https://www.npmjs.com/package/axios
import youTubeApiSearch from 'youtube-api-search';
// using lodash to throttle api searches, as opposed to instantly sending search requests to the youtube API
import _ from 'lodash';

// import our custom components
import SearchBar from './components/SearchBar'; // need to include relative path for files we create (unlike npm packages above), but don't need to include '.js' for files that have '.js' extension
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

// We will be accessing YouTube's API for content via the browser
const API_KEY = 'AIzaSyC_d_AOhR5ZNo2XA7avz83W2qJCmlr6bN0';

// <App /> as a class-based component -- we want to keep track of the list of videos returned from the YouTube API
// need to utilize state in order to do this so the data can persist throughout our application and filter down to the child components of <App />
class App extends Component {
	constructor(props) {
		super(props);

		// new state property selectedVideoObject will get passed to <VideoDetail />
		// to update the selectedVideoObject a callback function will be passed FROM <App /> INTO <VideoList /> and then into <VideoListItem /> from there
		// whenever a <VideoListItem /> is clicked, it will run the callback function with its respective videoObject
		this.state = {
			videosArray: [],
			selectedVideoObject: null
		};
		
		// including a default call to the YouTube API to pre-load our application with some video data -- additional notes on youTubeApiSearch internals down below
		this.youTubeSearch('star wars');
	} // end constructor()

	// define a class method for searching You Tube
	// used by the constructor to set initial state
	// also passed as a callback to <SearchBar /> for updating the state
	youTubeSearch(term) {
		youTubeApiSearch({ key: API_KEY, term }, videosArray => {
			console.log('setting <App /> state with videosArray', videosArray);
			// more ES6 succintness below, { videosArray } is shorthand for { videosArray: videosArray }
			// we can omit the property definition since the variable being referenced has the same name as the key we are assigning it to
			this.setState({
				videosArray,
				selectedVideoObject: videosArray[0]
			});
		});
	} // end youTubeSearch()

	// inside our <VideoList /> component below we define "a prop" on our JSX tag
	// this is called "passing props", i.e. passing data from a parent component to a child component
	// when we use a functional component, the props get delivered to the function as key-value pairs in an object argument
	// in this case, whenever <App /> re-renders, the most up-to-date version of videosArray will be delivered to our VideoList component
	render() {
		// using lodash to throttle api searches, as opposed to instantly sending search requests to the youtube API
		// https://lodash.com/docs/#debounce
		const youTubeSearch = _.debounce((term) => { console.log('delaying'); this.youTubeSearch(term); }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={ youTubeSearch } />
				<VideoDetails videoObject={ this.state.selectedVideoObject } />
				{/* pass <VideoList /> a callback function (subsequently passed to <VideoListItem /> that sets the selectedVideoObject in the state of <App /> */}
				<VideoList
					onVideoSelect={ selectedVideoObject => this.setState({ selectedVideoObject }) }
					videosArray={ this.state.videosArray } />
			</div>
		);
	} // end render()
} // end App class

// Tell React to go find the <div> with class = "container",
// then try to render the <App /> component's generated HTML into that <div>
// <div class="container"> is the root node of our entire React app
// --> future components all become children of (nested inside) this <div>
// 1. Need to create an instance of our component (App) before rendering it to the DOM, <App /> == <App></App> (a tag with no content can be a self closing tag)
// When writing JSX, putting component name/class in tag turns it into a component instance, i.e. gets transpiled to React.createElement(...)
// 2. ReactDOM.render() takes a second arguemnt that's a reference to an existing DOM node on the page, i.e. a target container
// document.querySelector('.container') is a reference to a <div> with class = "container"
ReactDOM.render(<App />, document.querySelector('.container'));

/*
RETAINING OLD CODE BELOW FOR NOTES PURPOSES
THIS WAS WHAT OUR <App /> COMPONENT STARTED AS WHEN IT WAS JUST A FUNCTIONAL COMPONENT

sample usage of youTubeApiSearch -- takes an object with properties 'key' (Y.T. API key) and 'term' (search term) as well as a callback function
callback function gets called with 'response.data.items' returned from the You Tube API - an array of up to 5 objects with video information
youTubeApiSearch({ key: API_KEY, term: 'foo fighters everlong'}, (searchResults => console.log('YouTube search results', searchResults)));

Create a new component that produces some HTML.
This appears to return HTML, but is actually JSX. Can't have HTML in J.S. files.
JSX is a subset/dialect of JavaScript that allows us to write what looks like HTML.
However, it's really JavaScript behind the scenes (later transpiled by Webpack/Babel).
*/
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />{/* JSX comment style --  redering our SearchBar component inside our App component */}
// 		</div>
// 	); // multi-line JSX expressions are typically enclosed in parens
// }