import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar";

const MovieCard = ({ media, mediaType }) => {
  // console.log(media.id);
  return (
    <Link to={`/movie/${media.id}`}>
      <div className="border border-slate-800 rounded-lg relative">
        {(mediaType === "tv" || media.media_type === "tv") && (
          <p className="absolute right-1 top-1 bg-black text-white p-1 text-sm rounded shadow-md">
            TV Show
          </p>
        )}
        <img
          className="rounded-tl-lg rounded-tr-lg"
          src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
          alt=""
        />
        <div className="relative -top-[1.5vw] px-4 py-2">
          <CircularProgressBar
            percent={Math.round(media.vote_average * 10)}
          ></CircularProgressBar>
          <p className="font-bold mt-2">{media.title || media.name}</p>
          <p className="text-slate-300">
            {media.release_date || media.first_air_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
