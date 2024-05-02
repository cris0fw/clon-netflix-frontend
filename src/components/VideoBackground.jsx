import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { videosMovies } from "../fuatures/movies/moviesSlice";

const VideoBackground = ({ dataCosasID }) => {
  const dispatch = useDispatch();
  const videoSelector = useSelector((state) => state?.movie?.videoMovies) || [];

  useEffect(() => {
    if ((dataCosasID?.id && !videoSelector) || videoSelector.length === 0) {
      dispatch(videosMovies(dataCosasID?.id));
    }
  }, [dataCosasID?.id, videoSelector]);

  const memoizedVideoSelector = useMemo(() => videoSelector, [videoSelector]);

  const videokey = memoizedVideoSelector ? memoizedVideoSelector[0] : null;

  return (
    <div className=" w-full h-screen">
      <iframe
        className="w-full h-screen aspect-video"
        src={
          videoSelector
            ? `https://www.youtube.com/embed/${videokey?.key}?si=iepEBsh_JHmBenz_&autoplay=1&mute=1&showinfo=0&loop=1`
            : ""
        }
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* <img
        src="https://uhdwallpapers.org/uploads/converted/21/03/13/godzilla-vs-kong-poster-1920x1080_785996-mm-90.jpg"
        alt="logo de pelicula"
        className="w-full h-full"
      /> */}
    </div>
  );
};

export default VideoBackground;
