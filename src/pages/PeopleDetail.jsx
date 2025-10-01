import React from "react";
import ImageCustom from "@components/ImageCustom";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { useLoaderData } from "react-router-dom";
// import useFetch from "@hooks/useFetch";
// import { useParams } from "react-router-dom";
const GENDER = {
  0: "Not set / not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};
const PeopleDetail = () => {
  const peopleInfor = useLoaderData();

  const mediaList = peopleInfor?.combined_credits?.cast || [];

  return (
    <div className="p-8 text-[1.2vw]">
      <div className="flex gap-4 sm:gap-6 lg:gap-8">
        <div className="flex-1">
          <p className="font-bold text-[1.3vw] mb-4">Avatar</p>
          <ImageCustom
            src={`https://image.tmdb.org/t/p/original${peopleInfor.profile_path}`}
            className={`shadow-md rounded w-full`}
          ></ImageCustom>
        </div>
        <div className="flex-1">
          <div className="">
            <div className="font-bold text-[1.3vw]">Personal Information</div>
            <div className="mt-4">
              <p className="font-bold">Known For</p>
              <p>{peopleInfor.known_for_department}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold">Gender</p>
              <p>{GENDER[peopleInfor.gender]}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold">Place of Birth</p>
              <p>{peopleInfor.place_of_birth}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold">Birthday</p>
              <p>{peopleInfor.birthday}</p>
            </div>
          </div>
        </div>
        <div className="flex-3">
          <p className="font-bold text-[2vw] mb-4">{peopleInfor.name}</p>
          <p className="font-bold mb-4">Biography</p>
          <p className="whitespace-pre-line">{peopleInfor.biography}</p>
        </div>
      </div>
      <div>
        <RelatedMediaList
          relatedMedia={mediaList}
          isLoading={false}
          title={"Known For"}
          className={
            "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
          }
        ></RelatedMediaList>
      </div>
    </div>
  );
};

export default PeopleDetail;
