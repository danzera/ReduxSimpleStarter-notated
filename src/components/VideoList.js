import React from 'react';
// import our custom component <VideoListItem />, which our <VideoList /> component will be comprised of
import VideoListItem from './VideoListItem'; // again, relative path used when importing custom modules (just like Node) - in this case VideoList.js is in the same directory as VideoListItem.js

// as noted in index.js, props is an object delivered from the parent component that renders <VideoList />
// <App /> is keeping track of the videosArray and giving this component the most up-to-date information every time it re-renders
const VideoList = props => {
	// using array methods such as .map is preferred to using loops for arrays
	// .map takes a callback function called once for each element in the arry with parameters (currentArrayElement, currentIndex, originalArray)
	// .map returns a new array containing whatever is returned from the C.B. function
	// this allows us to create some JSX for each element in our VideosArray (each a new instance of <VideoListItem />
	// it also allows us to pass each video's information as props when creating each unique instance of <VideoListItem />
	const videoListItemsArray = props.videosArray.map((videoObject, index, videosArray) => {
		console.log('creating a new <VideoListItem /> component for', videoObject);
		return <VideoListItem videoObject={ videoObject } />;
	});

	return (
		<ul className="col-md-4 list-group">
			{videoListItemsArray}
		</ul>
	);
}

export default VideoList;