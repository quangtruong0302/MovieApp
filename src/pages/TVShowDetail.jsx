import React from "react";
import Loading from "@components/Loading";
import { useParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import SliderMedia from "@components/SliderMedia";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";
import TVShowInformation from "@components/MediaDetail/TVShowInformation";
import SeasonList from "@components/MediaDetail/SeasonList";

const TVShowDetail = () => {
  const { id } = useParams();
  const { data: tvshowInfor, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });
  const { data: recommendationsResponse, isLoading: isRelatedTVShowLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });
  const relatedTVShow = recommendationsResponse.results || [];
  const certification = (tvshowInfor.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US"
  )?.rating;
  const crews = (tvshowInfor.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));
  const trailerVideoKey = (tvshowInfor.videos?.results || []).find(
    (video) => video.type === "Trailer"
  )?.key;
  if (isLoading || isRelatedTVShowLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner
        title={tvshowInfor.name}
        backdrop_path={tvshowInfor.backdrop_path}
        genres={tvshowInfor.genres}
        overview={tvshowInfor.overview}
        poster_path={tvshowInfor.poster_path}
        certification={certification}
        point={tvshowInfor.vote_average}
        crews={crews}
        release_date={tvshowInfor.first_air_date}
        trailerVideoKey={trailerVideoKey}
      ></Banner>
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="flex gap-6 sm:gap-8">
          <div className="flex-2">
            <ActorList
              actors={(tvshowInfor.aggregate_credits?.cast || []).map(
                (cast) => ({
                  ...cast,
                  character: cast.roles[0]?.character,
                  episodeCount: cast.roles[0]?.episode_count,
                })
              )}
              mediaType={"tv"}
            ></ActorList>
          </div>
          <div className="flex-1">
            <TVShowInformation tvshowInfor={tvshowInfor}></TVShowInformation>
          </div>
        </div>
        <SeasonList seasons={[...(tvshowInfor.seasons || [])].reverse()} />
        <RelatedMediaList
          relatedMedia={relatedTVShow.slice(0, 12)}
          isLoading={isRelatedTVShowLoading}
          title={"More like this"}
          className={
            "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
          }
        ></RelatedMediaList>
      </div>
    </div>
  );
};

export default TVShowDetail;
