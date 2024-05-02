import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { serieVideo } from "../fuatures/series/seriesSlice";

const VideoSeries = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const serieSelector = useSelector((state) => state.serie.serieVideo?.results);

  useEffect(() => {
    dispatch(serieVideo(id));
  }, []);

  const serieOption = serieSelector ? serieSelector[0] : null;

  return (
    <section className="w-full h-full">
      <iframe
        style={{ width: "100%", height: "100vh" }}
        src={`https://www.youtube.com/embed/${serieOption?.key}?si=2vB-5LDvKOIp32HG&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

export default VideoSeries;
