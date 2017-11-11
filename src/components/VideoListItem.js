import React from 'react';

// more ES6 shorthand -- we can pull a parameter out of the props object directly when declaring our component function
// this spares us from writing a line that say "const videoObject = props.videoObject" or from continually referring to props.videoObject - much the same as with module imports
const VideoListItem = ({ videoObject }) => {
	const imageUrl = videoObject.snippet.thumbnails.default.url;
	const videoTitle = videoObject.snippet.title;

	return (
		<li className="list-group-item">
			<div className="video-list media">
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