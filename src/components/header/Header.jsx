import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import imdb from "../../media/imdb.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({
  search,
  setSearch,
  handleChange,
  handleSearch,
  setSearchDisable,
  searchDisable,
}) {
  const navRef = useRef();
  const [isOpen, setOpen] = useState(false);

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("toggle__nav");
  // };

  const showNavbar = (bool) => {
    setOpen(bool);
  };

  const handleHome = () => {
    setSearch("");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    showNavbar(false);
    setOpen(false);
  };

  return (
    <div className="header">
      <div className={`header-left ${isOpen ? "toggle__nav" : null} `}>
        <ul>
          <li>
            <Link onClick={handleHome} to="/">
              <span className="cinetrek">
                <span className="dash">-</span> Cinetrek{" "}
                <span className="dash">-</span>
              </span>
            </Link>
          </li>
          <li>
            <Link onClick={scrollToTop} to="/movies/popular">
              Popular
            </Link>
          </li>

          <li>
            <Link onClick={scrollToTop} to="/movies/top_rated">
              Top Rated
            </Link>
          </li>

          <li>
            <Link onClick={scrollToTop} to="/movies/upcoming">
              Upcoming
            </Link>
          </li>

          <li>
            <Link onClick={scrollToTop} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      {searchDisable && (
        <div className="header-right">
          <SearchIcon
            className="header__search__icon"
            sx={{ color: "#c9c9c9" }}
          />
          {/* <h3>Search Box</h3> */}
          <form className="form" type="search">
            <input
              type="text"
              className="search__form"
              onChange={handleChange}
              value={search}
              onKeyDown={handleSearch}
              placeholder="Enter your search"
            />
          </form>
        </div>
      )}
      <div className="header__hamburger">
        <Hamburger
          // onClick={showNavbar}
          duration={0.15}
          label="Show menu"
          size={24}
          onToggle={(toggle) => {
            if (toggle) {
              console.log("open Menu");
              showNavbar(true);
            } else {
              console.log("close Menu");
              showNavbar(false);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Header;
