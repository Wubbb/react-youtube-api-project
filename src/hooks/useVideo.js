import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (term) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchTerm(term);
  }, []);

  const searchTerm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, setVideos];
};

export default useVideos;
