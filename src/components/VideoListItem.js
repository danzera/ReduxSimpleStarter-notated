import React from 'react';

// more ES6 shorthand -- we can pull a parameter out of the props object directly when declaring our component function
// this spares us from writing a line that say "const videoObject = props.videoObject" or from continually referring to props.videoObject - much the same as with module imports
// can pull multiple variables out of an object input by separating with a comma inside of curly braces --> { var1, var2, var3, etc... }
const VideoListItem = ({ videoObject, onVideoSelect }) => {
	const imageUrl = videoObject.snippet.thumbnails.default.url;
	const videoTitle = videoObject.snippet.title;

	// include onClick() function for our <VideListItem /> that references the callback function that was passed down from <App /> to set the selectedVideoObject propert on the state for <App />
	return (
		<li onClick={ () => onVideoSelect(videoObject) } className="list-group-item">
			<div className="video-item media">
				<div className="media-left">
					<img className="media-object" src={ imageUrl } />
				</div>
				<div className="media-body">
					<div className="media-heading">{ videoTitle }</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;