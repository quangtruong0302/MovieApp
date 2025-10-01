import React from "react";
import Loading from "@components/Loading";
import { useParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import SliderMedia from "@components/SliderMedia";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });
  const { data: recommendationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });
  const relatedMovies = recommendationsResponse.results || [];

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US"
    )?.release_dates || []
  ).find((release_date) => release_date.certification)?.certification;
  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const trailerVideoKey = (movieInfo.videos?.results || []).find(
    (video) => video.type === "Trailer"
  )?.key;
  if (isLoading || isRelatedMoviesLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner
        title={movieInfo.title}
        backdrop_path={movieInfo.backdrop_path}
        genres={movieInfo.genres}
        overview={movieInfo.overview}
        poster_path={movieInfo.poster_path}
        certification={certification}
        point={movieInfo.vote_average}
        crews={crews}
        release_date={movieInfo.release_date}
        trailerVideoKey={trailerVideoKey}
      ></Banner>
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="flex gap-6 sm:gap-8">
          <div className="flex-2">
            <ActorList
              actors={movieInfo.credits?.cast || []}
              mediaType={"movie"}
            ></ActorList>
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo}></MovieInformation>
          </div>
        </div>
        <RelatedMediaList
          relatedMedia={relatedMovies.slice(0, 12)}
          isLoading={isRelatedMoviesLoading}
          title={"More like this"}
          className={
            "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
          }
        ></RelatedMediaList>
      </div>
    </div>
  );
};

export default MovieDetail;
