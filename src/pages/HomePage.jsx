import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header";
import FeatureMovie from "../components/FeatureMovie";

import MediaList from "../components/MediaList";
import { TRENDING_TABS, TOPRATED_TABS } from "../libs/constant";
function HomePage() {
  return (
    <div>
      <FeatureMovie></FeatureMovie>
      <div className="py-10 bg-black">
        <MediaList title={"Trending"} tabs={TRENDING_TABS}></MediaList>
        <MediaList title={"Top Rated"} tabs={TOPRATED_TABS}></MediaList>
      </div>
    </div>
  );
}

export default HomePage;
