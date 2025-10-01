import CircularProgressBar from "@components/CircularProgressBar";
import ImageCustom from "@components/ImageCustom";
import React, { useState } from "react";

const SeasonList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const curentSeasons = isShowMore ? seasons : seasons.slice(0, 3);
  return (
    <div className="pt-10 text-[1.2vw]">
      <p className="font-bold text-[1.4vw] mb-4">Season list</p>
      <div className="space-y-4">
        {curentSeasons.map((season) => (
          <div className="flex gap-4 rounded-lg shadow-md border border-slate-200 p-3">
            <ImageCustom
              className={"rounded-lg w-1/4"}
              src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
            ></ImageCustom>

            <div className="flex-1 space-y-1">
              <p className="font-bold">{season.name}</p>
              <div className="flex gap-2 items-center">
                <span className="font-bold">Rating</span>
                <CircularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                ></CircularProgressBar>
              </div>
              <p>
                <span className="font-bold">Release date: </span>{" "}
                {season.air_date}
              </p>
              <p>{season.episode_count} Episode</p>
              <p className="mt-8">{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 font-bold text-[1vw] cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {!isShowMore ? "Show more" : "Show less"}
      </div>
    </div>
  );
};

export default SeasonList;
