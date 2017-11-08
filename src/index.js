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
// Need to create an instance of our component (App) before rendering it to the DOM, <App /> == <App></App> (a tag with no content can be a self closing tag)
// When writing JSX, putting component name/class in tag turns it into a component instance, i.e. gets transpiled to React.createElement(...)
ReactDOM.render(<App />);

// running at this point yields:
// Uncaught Error: _registerComponent(...): Target container is not a DOM element.
// Need to tell React WHERE to put the component on the page --> presently it has no idea where to put it
// We do this by passing a second argument to ReactDOM.render()