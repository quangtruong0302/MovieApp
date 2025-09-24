import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";

const MovieDetail = () => {
  const { id } = useParams();
  const [mediaInfo, setMediaInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjE0NDk0MGE5MjhkMDIzOWE1OGY4MTJlNWEwY2E3YSIsIm5iZiI6MTc0OTAzMjgzMi44NjMwMDAyLCJzdWIiOiI2ODQwMWY4MDZkNTgwOWIxZmIyODljNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Oo-TSYjRwKWiLYo-IaoPS4qiuDbQN-TnP3dOv4uysZ8",
        },
      }
    )
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setMediaInfo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner mediaInfo={mediaInfo}></Banner>
      <div className="flex max-w-screen-xl mx-auto px-6 py-10 gap-6">
        <div className="flex-2">
          <ActorList actors={mediaInfo.credits?.cast || []}></ActorList>
        </div>
        <div className="flex-1">
          <p className="font-bold text-[1.4vw] mb-4">Information</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
