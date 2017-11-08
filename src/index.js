// Tell transpiler to give this file access to React.
import React from 'react'; // Goes and gets dependency/library named 'react' and assigns it to a variable named 'React'

// Create a new component that produces some HTML.
const App = function() {
	// This appears to return HTML, but is actually JSX. Can't have HTML in J.S. files.
	// JSX is a subset/dialect of JavaScript that allows us to write what looks like HTML.
	// However, it's really JavaScript behind the scenes (later transpiled by Webpack/Babel).
	return <div>Hi!</div>;
}

// Tell React to take this component's generated HTML and put it in/on the DOM.
React.render(App);

// running at this point yields:
// "Warning: React.render is deprecated. Please use ReactDOM.render from require('react-dom') instead."
// Original React library has diverged into two separate libraries.
// React (core) library knows how to work with React components -- how to render them, nest them togeter...
// ReactDOM library knows how to actually render the components to the DOM (insert them into the DOM)