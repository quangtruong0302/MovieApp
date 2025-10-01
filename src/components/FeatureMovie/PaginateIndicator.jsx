import React from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((item) => (
          <li
            key={item.id}
            className={`h-2 w-10 cursor-pointer ${
              item.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"
            }`}
            onClick={() => setActiveMovieId(item.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
