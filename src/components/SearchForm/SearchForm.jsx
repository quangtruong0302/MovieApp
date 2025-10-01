import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  // eslint-disable-next-line no-unused-vars

  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");
  const { control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });

  const formValues = watch();
  useEffect(() => {
    setSearchFormValues(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValues)]);

  return (
    <div>
      <form className="space-y-3">
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />

        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />

        {/* <input type="submit" value="Siubmit" /> */}
      </form>
    </div>
  );
};

export default SearchForm;
