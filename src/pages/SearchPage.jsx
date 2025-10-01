import MediaCard from "@components/MediaCard";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm/SearchForm";
import useFetch from "@hooks/useFetch";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });
  const [minRating, maxRating] =
    searchFormValues.rating === "All"
      ? [0, 100]
      : searchFormValues.rating.split(" - ");
  const { data } = useFetch({
    url: `/discover/${
      searchFormValues.mediaType
    }?sort_by=popularity=desc&with_genres=${searchFormValues.genres.join(
      ","
    )}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <p className="font-bold text-[1.5vw] mb-4">Search</p>
      <div className="flex items-start gap-6">
        <div className="flex-1 p-4 border border-slate-300 shadow-md rounded-lg">
          <SearchForm setSearchFormValues={setSearchFormValues}></SearchForm>
        </div>
        <div className="flex-3">
          <RelatedMediaList
            relatedMedia={data.results || []}
            className={
              "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4"
            }
          ></RelatedMediaList>
          {/* {JSON.stringify(data.results)} */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
