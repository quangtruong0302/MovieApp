import React from "react";
import ImageCustom from "@components/ImageCustom";
import { Link } from "react-router-dom";

const ActorInfo = ({
  id,
  name,
  character,
  profile_path,
  episodeCount,
  mediaType,
}) => {
  return (
    <Link
      to={`/people/${id}`}
      className="border border-slate-300 shadow-sm rounded-lg"
    >
      <div>
        <ImageCustom
          className="rounded-tl-lg rounded-tr-lg w-full"
          src={`${
            profile_path
              ? `https://image.tmdb.org/t/p/original${profile_path}`
              : "/images/No_image.png"
          }`}
          width={180}
          height={270}
        ></ImageCustom>
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>{character}</p>
          <p>
            {mediaType === "tv"
              ? episodeCount > 1
                ? `${episodeCount} Episodes`
                : `${episodeCount} Episode`
              : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ActorInfo;
