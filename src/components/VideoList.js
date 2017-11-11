import React from 'react';

// as noted in index.js, props is an object delivered from the parent component that renders <VideoList />
// <App /> is keeping track of the videosArray and giving this component the most up-to-date information every time it re-renders
const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group">
			{props.videosArray.length}
		</ul>
	);
}

export default VideoList;