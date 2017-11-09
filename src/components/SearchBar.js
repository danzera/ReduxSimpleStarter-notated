// still need to include 'react' even though we're not directly referencing it in the file b/c react is what translates the JSX into normal JS
import React from 'react'; // "Uncaught ReferenceError: React is not defined" would be thrown if not included b/c React is being called under the hood
import ReactDOM from 'react-dom';

// Create search bar component
const SearchBar = () => {
	// return some JSX that will become an HTML input (can be self closing because it has no inner content)
	return <input />;
}

// in order to give other files access to this file's component, we need to export it
export default SearchBar; // now any file that imports 'SearchBar.js' will have access to the SearchBar component