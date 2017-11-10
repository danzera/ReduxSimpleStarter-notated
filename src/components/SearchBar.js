// still need to include 'react' even if we're not directly referencing it in the file b/c react is what translates JSX into normal JS
// { Component } is ES6 syntactic sugar that lets us quickly pull off the property called "Component" from React
// It takes "React.Component" and stores it in a varialbe called 'Component' (which slightly simplifies the "extends" sytanx)
import React, { Component } from 'react'; // "Uncaught ReferenceError: React is not defined" would be thrown if not included b/c React is called under the hood when translating JSX

// create SearchBar class and give it access to all the functionality that React.Component has
class SearchBar extends Component {
	// all JavaScript classes have a special function called "constructor"
	// it's the 1st and only function called whenever a new instance of a class is created
	// it's reserved for class setup - initializing variables, state, etc.
	constructor(props) {
		// this calls the parent class' constructor function (React.Component, in this case)
		super(props); // must include -- would get "Uncaught Error: Cannot find module "./components/SearchBar" if we didn't include this
		
		// need to initialize our state object (just a plain JavaScript object) before we can utilize state inside of our component
		// functional components do not have state -- only class-based components do
		// we initialize our component's state object with properties we want to record on the state
		// in this case we want to keep track of the search term from the user's input, to do so we will record it on the state object
		this.state = { searchTerm: ''};
	}

	// need to define a render() method for all CLASS-BASED COMPONENTS that we create in order for it to render itself / return some JSX
	render() {
		// inside our JSX we pass our onInputChange() method defined below
		// all HTML inputs emit a "Change" event whenever users interact with them -- THIS IS A VANILLA HMTL / BROWSER BEHAVIOR -- we're just telling it what to do with that information
		// { } <-- are used for JavaScript variales within JSX
		// could also concisely write our event handler function directly within the { }
		// One input, one line arrow functions can simply be written as: event => console.log('SearchBar onChange event object', event)
		// -- where event is the iput, no parens needed when there is only one input, and no { } are needed around one-line functions
		// render() needs to return JSX, otherwise we'll get an error -- "Warning: SearchBar(...): No `render` method found on the returned component instance: ..."
		// setting value = this.state.term for the input makes it a "CONTROLLED COMPONENT", we're telling the input that it's value is provided by the state
		return (
			<div>
				<input
					value = { this.state.term }
					onChange = { event => this.setState({ term: event.target.value }) } />
				Value of input: { this.state.term }
			</div>
		); // A NOTE ON MANIPULATING STATE: state should only be manipulated using the this.setState() method outside of the constructor function
		// pass this.setState() and object with the new state that we want to give to our component
		// it's OK to reference a state's value, as above with this.state.term, but NEVER alter it this way outside of the constructor
		// React is doing work behind the scenes and relies on this.setState to update things when changes to state occur
		// in the case of the input above, every time the user alters the input field, this.setState is triggered, which in turn causes the render() method to be re-run
		// when the component gets re-rendered, it does so with the updated state object which is reflected on the DOM
		// IN SUMMARY...
		// 1. component renders initially with value = this.state.term (empty string based on the constructor)
		// 2. event handler runs when an update is made to the <input> by the user, which calls this.setState() method
		// 3. once the state has been updated, this.setState causes the render() method to be run 
		// 4. the render() method runs again, accessing the now updated state object
	}

	/* METHOD NOT ACTUALLY BEING USED PRESENTLY B/C EVENT HANDLER IS DEFINED ABOVE INLINE, BUT CAN BE DEFINED SEPARATELY LIKE THIS AS WELL
		WHERE THE EVENT HANDLER IS A METHOD ON THE CLASS THAT GETS CALLED WITHIN THE COMPONENT -- SEE PREVIOUS COMMIT FOR THIS 
	// declare an event handler for our SearchBar component to run whenever text changes within the input
	// naming convention = "on" OR "handle" + element name + event name
	// all browser events triggered by native elements (<input>, <div>, <span>, <etc...>) that have event handlers get passed an 'event' object
	// the 'event' object - often abbreviated 'e' (just a variable name) - describes the context of the event that occured
	onInputChange(event) {
		console.log('SearchBar onInputChange event object', event);
		console.log('SearchBar input content onInputChange', event.target.value);
	}
	*/
}

// in order to give other files access to this file's component, we need to export it
export default SearchBar; // now any file that imports 'SearchBar.js' will have access to the SearchBar component