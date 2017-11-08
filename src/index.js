// Tell transpiler to give this file access to React.
import React from 'react'; // Goes and gets dependency/library named 'react' and assigns it to a variable named 'React'
// Original React library has diverged into two separate libraries.
// React (core) library knows how to work with React components -- how to render them, nest them togeter...
import ReactDOM from 'react-dom'; // ReactDOM library knows how to actually render the components to the DOM (insert them into the DOM)

// Create a new component that produces some HTML.
const App = function() {
	// This appears to return HTML, but is actually JSX. Can't have HTML in J.S. files.
	// JSX is a subset/dialect of JavaScript that allows us to write what looks like HTML.
	// However, it's really JavaScript behind the scenes (later transpiled by Webpack/Babel).
	return <div>Hi!</div>;
}

// Tell React to take this component's generated HTML and put it in/on the DOM.
ReactDOM.render(App);

// running at this point yields:
// "Uncaught Error: ReactDOM.render():
// Invalid component element. Instead of passing a component class,
// make sure to instantiate it by passing it to React.createElement."
// 'App' is a class/type of component --> it could have many different instances
// essentially 'App' is a factory that produces instances of the actual components that get rendered to the DOM
// *** TAKE-AWAY: We need to instantiate our components before rendering them to the DOM.