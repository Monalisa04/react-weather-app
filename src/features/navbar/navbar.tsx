import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/components/search";

const Navbar = (props: any) => {
  return (
    <div className="app-header-fixed">
      <nav className="app-header navbar box-shadow bg-dark">
        <span className="navbar-header text-white">
          <Link to="/">WEATHER APP</Link>
        </span>
        <Search />
      </nav>
    </div>
  );
};

export default Navbar;
