import React, { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  // const [url, setUrl] = useState(
  //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  // );
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjE0NDk0MGE5MjhkMDIzOWE1OGY4MTJlNWEwY2E3YSIsIm5iZiI6MTc0OTAzMjgzMi44NjMwMDAyLCJzdWIiOiI2ODQwMWY4MDZkNTgwOWIxZmIyODljNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Oo-TSYjRwKWiLYo-IaoPS4qiuDbQN-TnP3dOv4uysZ8",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovie = data.results.slice(0, 4);
      setMovies(popularMovie);
      setActiveMovieId(popularMovie[0].id);
      // setMovies(data.results);
    });
  }, []);

  return (
    <div className=" relative text-white">
      {movies
        .filter((item) => item.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie}></Movie>
        ))}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      ></PaginateIndicator>
    </div>
  );
};

export default FeatureMovie;
