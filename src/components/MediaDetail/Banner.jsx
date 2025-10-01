import React from "react";
import { groupBy } from "lodash";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModelContext } from "@context/ModalProvider";

const Banner = ({
  title,
  backdrop_path,
  poster_path,
  certification,
  crews,
  genres,
  release_date,
  point = 0,
  overview,
  trailerVideoKey,
}) => {
  const groupedCrews = groupBy(crews, "job");
  const { openPopup } = useModelContext();
  return (
    <div className="relative overflow-hidden">
      <img
        width={2000}
        height={3000}
        className="absolute inset-0 brightness-[.15] w-full"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
      />
      <div className="flex lg:gap-8 gap-6 relative text-white max-w-screen-xl mx-auto px-6 py-10">
        <div className="flex-1">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-2 text-[1.2vw]">
          <p className="font-bold mb-2 text-[2vw]">{title}</p>
          <div className="flex gap-4 items-center">
            <span className="text-gray-400 border border-gray-400 px-2 py-1">
              {certification || "N/A"}
            </span>
            <p>{release_date}</p>
            <p>{(genres || []).map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="flex items-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(point * 10)}
                size={3.5}
                strokeWidth={0.3}
              ></CircularProgressBar>
              <span>Rating</span>
            </div>
            <button
              className="flex items-center gap-1"
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    frameborder="0"
                    className="w-[50vw] aspect-video"
                  />
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              <span>Trailer</span>
            </button>
          </div>
          <div className="mt-4">
            <p className="font-bold text-[1.3vw mb-2]">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
