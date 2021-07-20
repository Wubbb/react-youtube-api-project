import React, { useState, useEffect } from "react";
import Searchbar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideo from "../hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, searchTerm] = useVideo("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <Searchbar onFormSubmit={searchTerm} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
