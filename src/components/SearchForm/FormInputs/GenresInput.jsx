import useFetch from "@hooks/useFetch";
import { CloudLightning } from "lucide-react";
import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";
// https://api.themoviedb.org/3/genre/movie/list
// https://api.themoviedb.org/3/genre/tv/list
const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch(
    {
      url: `/genre/${mediaType}/list`,
    },
    {
      enabled: mediaType,
    }
  );
  const genres = data?.genres || [];

  useEffect(() => {
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);
  return (
    <div className="flex gap-1 flex-wrap">
      {genres.map((genre) => (
        <p
          key={genre.id}
          className={`border border-slate-400 rounded-lg cursor-pointer px-2 py-1 ${
            value.includes(genre.id) ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(genre.id)) {
              newValue = newValue.filter((g) => g !== genre.id);
            } else {
              newValue = [...value, genre.id];
            }
            onChange(newValue);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
};

export default GenresInput;
