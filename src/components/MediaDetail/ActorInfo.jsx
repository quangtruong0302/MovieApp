import React from "react";

const ActorInfo = ({ id, name, character, profile_path }) => {
  return (
    <div className="border border-slate-300 shadow-sm rounded-lg">
      <img
        className="rounded-tl-lg rounded-tr-lg"
        src={`${
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : "/images/No_image.png"
        }`}
        alt=""
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>18</p>
      </div>
    </div>
  );
};

export default ActorInfo;
