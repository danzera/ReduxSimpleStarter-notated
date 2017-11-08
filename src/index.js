// Create a new component that produces some HTML.
const App = function() {
	// This appears to return HTML, but is actually JSX. Can't have HTML in J.S. files.
	// JSX is a subset/dialect of JavaScript that allows us to write what looks like HTML.
	// However, it's really JavaScript behind the scenes (later transpiled by Webpack/Babel).
	return <div>Hi!</div>;
}

// Tell React to take this component's generated HTML and put it in/on the DOM.
React.render(App);