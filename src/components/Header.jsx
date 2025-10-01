import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-14 lg:h-20  items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src="/images/netflix.png" className="w-16 sm:w-28" alt="" />
        </Link>
        <Link className="lg:text-xl" to={`/search?mediaType=movie`}>
          Movie
        </Link>
        <Link className="lg:text-xl" to={`/search?mediaType=tv`}>
          TV Show
        </Link>
      </div>

      <Link to={"/search"}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </Link>
    </header>
  );
};

export default Header;
