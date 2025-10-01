import React, { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";
import { Link } from "react-router-dom";

const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMovieResponse, isLoading } = useFetch({
    url: `/movie/popular`,
  });

  const { data: videosTrailer } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId }
  );
  const trailerVideoKey = (videosTrailer?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  )?.key;
  const movies = (popularMovieResponse.results || []).slice(0, 4);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);
  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className=" relative text-white">
          {movies
            .filter((item) => item.id === activeMovieId)
            .map((movie) => (
              <Movie
                key={movie.id}
                data={movie}
                trailerVideoKey={trailerVideoKey}
              ></Movie>
            ))}

          <PaginateIndicator
            movies={movies}
            activeMovieId={activeMovieId}
            setActiveMovieId={setActiveMovieId}
          ></PaginateIndicator>
        </div>
      )}
    </div>
  );
};

export default FeatureMovie;
