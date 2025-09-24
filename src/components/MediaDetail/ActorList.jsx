import React, { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const curentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actor</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
        {curentActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profile_path={actor.profile_path}
          ></ActorInfo>
        ))}
      </div>
      <div
        className="mt-4 font-bold cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {!isShowMore ? "Show more" : "Show less"}
      </div>
    </div>
  );
};

export default ActorList;
