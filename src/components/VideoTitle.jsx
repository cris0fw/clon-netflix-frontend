import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ dataCosas }) => {
  return (
    <div className="absolute top-32 left-3 text-white pt-[10%] p-12">
      <h1 className="text-3xl font-bold">{dataCosas?.title}</h1>
      <p className="w-[650px]">{dataCosas?.overview}</p>
      <div className="mt-10 flex items-center gap-5">
        <button className="flex justify-center items-center gap-3 px-4 py-3 w-[130px] rounded-md bg-white text-black font-bold">
          <FaPlay />
          Play
        </button>
        <button className="flex justify-center items-center gap-3 px-2 py-3 w-[200px] rounded-md bg-rojo text-white font-bold">
          <CiCircleInfo /> Watch More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
