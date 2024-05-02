import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { videosMovies } from "../fuatures/movies/moviesSlice";
import { serieVideo } from "../fuatures/series/seriesSlice";

const VideoMovies = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoSelector = useSelector((state) => state.movie.videoMovies);

  useEffect(() => {
    dispatch(videosMovies(id));
    dispatch(serieVideo(id));
  }, []);

  const videoOption = videoSelector ? videoSelector[0] : null;

  return (
    <section className="w-full h-full">
      <iframe
        style={{ width: "100%", height: "100vh" }}
        src={`https://www.youtube.com/embed/${videoOption?.key}?si=2vB-5LDvKOIp32HG&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

export default VideoMovies;
