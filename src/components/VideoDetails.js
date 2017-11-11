import React from 'react';

const VideoDetails = ({ videoObject }) => {
	// return alternate JSX if no videObject is provided from props
	if (!videoObject) {
		return <div>Christian Pondering...</div>;
	}
	// we can construct the video URL from the base URL and the ID of the specific video we want to view
	const videoId = videoObject.id.videoId;
	// template strings -- more ES6 magic
	// shorthand for incorporating variables into strings is to use back-tics instead of quotes and wrap variables inside of ${ }
	// previously would have needed string concatenation for this --> "https://www.youtube.com/embed/" + videoId
	const videoUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={ videoUrl }></iframe>
			</div>
			<div className="details">
				<div>{ videoObject.snippet.title }</div>
				<div>{ videoObject.snippet.description }</div>
			</div>
		</div>
	);
};

export default VideoDetails;