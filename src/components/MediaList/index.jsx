import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjE0NDk0MGE5MjhkMDIzOWE1OGY4MTJlNWEwY2E3YSIsIm5iZiI6MTc0OTAzMjgzMi44NjMwMDAyLCJzdWIiOiI2ODQwMWY4MDZkNTgwOWIxZmIyODljNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Oo-TSYjRwKWiLYo-IaoPS4qiuDbQN-TnP3dOv4uysZ8",
        },
      }).then(async (res) => {
        const data = await res.json();
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      });
    }
  }, [activeTabId, tabs]);
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
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media.id}
              media={media}
              mediaType={activeTabId}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
};

export default MediaList;
