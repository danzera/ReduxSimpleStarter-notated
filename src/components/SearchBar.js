// still need to include 'react' even if we're not directly referencing it in the file b/c react is what translates JSX into normal JS
// { Component } is ES6 syntactic sugar that lets us quickly pull off the property called "Component" from React
// It takes "React.Component" and stores it in a varialbe called 'Component' (which slightly simplifies the "extends" sytanx)
import React, { Component } from 'react'; // "Uncaught ReferenceError: React is not defined" would be thrown if not included b/c React is called under the hood when translating JSX

// create SearchBar class and give it access to all the functionality that React.Component has
class SearchBar extends Component {

	// need to define a render() method for all CLASS-BASED COMPONENTS that we create in order for it to render itself / return some JSX
	render() {
		// inside our JSX we pass our onInputChange() method defined below
		// all HTML inputs emit a "Change" event whenever users interact with them -- THIS IS A VANILLA HMTL / BROWSER BEHAVIOR -- we're just telling it what to do with that information
		// { } <-- are used for JavaScript variales within JSX
		// could also concisely write our event handler function directly within the { }
		// One input, one line arrow functions can simply be written as: event => console.log('SearchBar onChange event object', event)
		// -- where event is the iput, no parens needed when there is only one input, and no { } are needed around one-line functions
		return <input onChange={this.onInputChange} />; // render() needs to return JSX, otherwise we'll get an error -- "Warning: SearchBar(...): No `render` method found on the returned component instance: ..."
	}

	// declare an event handler for our SearchBar component to run whenever text changes within the input
	// naming convention = "on" OR "handle" + element name + event name
	// all browser events triggered by native elements (<input>, <div>, <span>, <etc...>) that have event handlers get passed an 'event' object
	// the 'event' object - often abbreviated 'e' (just a variable name) - describes the context of the event that occured
	onInputChange(e) {
		console.log('SearchBar onInputChange event object', e);
		console.log('SearchBar input content onInputChange', e.target.value);
	}
}

// in order to give other files access to this file's component, we need to export it
export default SearchBar; // now any file that imports 'SearchBar.js' will have access to the SearchBar component