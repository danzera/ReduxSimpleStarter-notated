// still need to include 'react' even if we're not directly referencing it in the file b/c react is what translates JSX into normal JS
// { Component } is ES6 syntactic sugar that lets us quickly pull off the property called "Component" from React
// It takes "React.Component" and stores it in a varialbe called 'Component' (which slightly simplifies the "extends" sytanx)
import React, { Component } from 'react'; // "Uncaught ReferenceError: React is not defined" would be thrown if not included b/c React is called under the hood when translating JSX
import ReactDOM from 'react-dom';

// create SearchBar class and give it access to all the functionality that React.Component has
class SearchBar extends Component {
	// need to define a render() method for all CLASS-BASED COMPONENTS that we create in order for it to render itself / return some JSX
	render() {
		return <input />; // render() needs to return JSX, otherwise we'll get an error -- "Warning: SearchBar(...): No `render` method found on the returned component instance: ..."
	}
}

// in order to give other files access to this file's component, we need to export it
export default SearchBar; // now any file that imports 'SearchBar.js' will have access to the SearchBar component