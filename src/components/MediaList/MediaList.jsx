import React, { useState } from "react";
import MediaCard from "@components/MediaCard";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";

const MediaList = ({ title, tabs }) => {
  // const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;

  const { data, isLoading } = useFetch({
    url,
  });
  const mediaList = (data.results || []).slice(0, 12);

  // useEffect(() => {
  //   const url = tabs.find((tab) => tab.id === activeTabId)?.url;
  //   if (url) {
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  //       },
  //     }).then(async (res) => {
  //       const data = await res.json();
  //       const trendingMediaList = data.results.slice(0, 12);
  //       setMediaList(trendingMediaList);
  //     });
  //   }
  // }, [activeTabId, tabs]);
  return (
    <div className="px-8 text-[1.2vw] p-10 p bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex justify-between items-center gap-4 border border-white rounded">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className={`px-2 py-1 cursor-pointer rounded ${
                  tab.id === activeTabId ? "bg-white text-black" : ""
                }`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {mediaList.map((media) => {
              return (
                <MediaCard
                  key={media.id}
                  media={media}
                  mediaType={activeTabId}
                ></MediaCard>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaList;
