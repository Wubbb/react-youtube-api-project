import React from 'react';



const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item">
            <img className="ui avatar image" alt={video.snippet.channelTitle} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">Title </div>
                {video.snippet.title}
            </div>
        </div>
    )
};


export default VideoItem;