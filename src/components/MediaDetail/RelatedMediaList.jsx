import MediaCard from "@components/MediaCard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "@components/Loading";

const RelatedMediaList = ({ relatedMedia, isLoading, title, className }) => {
  return (
    <div className={`${title ? "pt-10" : ""} relative`}>
      {title && <p className="font-bold text-[1.4vw] mb-4">{title}</p>}
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className={className}>
          {relatedMedia.map((mediaCard) => (
            <MediaCard
              key={mediaCard.id}
              media={mediaCard}
              mediaType={mediaCard.media_type}
            ></MediaCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
