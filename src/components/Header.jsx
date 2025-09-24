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
        <a className="lg:text-xl" href="">
          Phim
        </a>
        <a className="lg:text-xl" href="">
          Truyền hình
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
