import React, { useEffect, useMemo, useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

export const MovieContainer = () => {
  const movie = useSelector((state) => state?.movie?.popular?.results) || [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const memoizedMovie = useMemo(() => movie, [movie]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * memoizedMovie.length);
    setSelectedIndex(randomIndex);
  }, [memoizedMovie]);

  const selectedMovies = memoizedMovie[selectedIndex];
  return (
    <div>
      <VideoTitle dataCosas={selectedMovies} />
      <VideoBackground dataCosasID={selectedMovies} />
    </div>
  );
};
