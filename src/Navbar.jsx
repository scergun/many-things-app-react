import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext, ThemeContext } from "./App.jsx";
import "./Navbar.css";
import { MoonFill, SunFill, Filter } from "react-bootstrap-icons";

export const Navbar = () => {
  const { username, currentLink, setCurrentLink } = useContext(AppContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState("start");

  const dropDownFunc = () => {
    if (dropdown === "start") {
      setDropdown("dropdown");
    } else if (dropdown === "dropdown") {
      setDropdown("dropdown no-dropdown");
    } else if (dropdown === "dropdown no-dropdown") {
      setDropdown("dropdown");
    }
  };

  return (
    <div className={`navbar-container ${theme}`}>
      <div className="navbar">
        <Link
          onClick={() => setCurrentLink(0)}
          className={currentLink === 0 ? `active ${theme}` : `${theme}`}
          to={"/CatFact"}
        >
          CatFact
        </Link>
        <Link
          onClick={() => setCurrentLink(1)}
          className={currentLink === 1 ? `active ${theme}` : `${theme}`}
          to={"/AgePredictor"}
        >
          AgePredictor
        </Link>
        <Link
          onClick={() => setCurrentLink(2)}
          className={currentLink === 2 ? `active ${theme}` : `${theme}`}
          to={"/ExcuseFinder"}
        >
          ExcuseFinder
        </Link>
        <Link
          onClick={() => setCurrentLink(3)}
          className={currentLink === 3 ? `active ${theme}` : `${theme}`}
          to={"/Counter"}
        >
          CounterApp
        </Link>
        <div className="last-item">
          <Link
            onClick={() => setCurrentLink(4)}
            className={currentLink === 4 ? `active ${theme}` : `${theme}`}
            to={"/NewProfile"}
          >
            {username}
          </Link>
          <button className="emoji">
            {theme === "dark" && (
              <MoonFill
                size={17}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            )}
            {theme === "light" && (
              <SunFill
                size={25}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            )}
          </button>
        </div>
      </div>

      <div className="navbar-resp1">
        <button onClick={dropDownFunc} className="emoji1">
          <Filter />
        </button>
        <ul className={`navbar-nav ${dropdown}`}>
          <Link
            onClick={() => {
              setCurrentLink(0);
              setDropdown("dropdown no-dropdown");
            }}
            className={currentLink === 0 ? `active ${theme}` : `${theme}`}
            to={"/CatFact"}
          >
            CatFact
          </Link>
          <Link
            onClick={() => {
              setCurrentLink(1);
              setDropdown("dropdown no-dropdown");
            }}
            className={currentLink === 1 ? `active ${theme}` : `${theme}`}
            to={"/AgePredictor"}
          >
            AgePredictor
          </Link>
          <Link
            onClick={() => {
              setCurrentLink(2);
              setDropdown("dropdown no-dropdown");
            }}
            className={currentLink === 2 ? `active ${theme}` : `${theme}`}
            to={"/ExcuseFinder"}
          >
            ExcuseFinder
          </Link>
          <Link
            onClick={() => {
              setCurrentLink(3);
              setDropdown("dropdown no-dropdown");
            }}
            className={currentLink === 3 ? `active ${theme}` : `${theme}`}
            to={"/Counter"}
          >
            CounterApp
          </Link>

          <Link
            onClick={() => {
              setCurrentLink(4);
              setDropdown("dropdown no-dropdown");
            }}
            className={currentLink === 4 ? `active ${theme}` : `${theme}`}
            to={"/NewProfile"}
          >
            {username}
          </Link>

          <button className="emoji">
            {theme === "dark" && (
              <MoonFill
                size={17}
                onClick={() => {
                  setDropdown("dropdown no-dropdown");
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              />
            )}
            {theme === "light" && (
              <SunFill
                size={25}
                onClick={() => {
                  setDropdown("dropdown no-dropdown");
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              />
            )}
          </button>
        </ul>
      </div>

      {/* 
      <div
        className={
          isDropdown === true
            ? "navbar-responsive-hidden dropdown-false"
            : "navbar-responsive-hidden dropdown-true"
        }
      >
        <button onClick={() => setIsDropdown(true)}>
          <Filter />
        </button>
      </div>
      <div
        className={
          isDropdown === true
            ? "navbar-responsive dropdown-true"
            : "navbar-responsive dropdown-false"
        }
      >
        <button onClick={() => setIsDropdown(false)}>
          <Filter />
        </button>

        <Link
          onClick={() => setCurrentLink(0)}
          className={currentLink === 0 ? `active ${theme}` : `${theme}`}
          to={"/CatFact"}
        >
          CatFact
        </Link>
        <Link
          onClick={() => setCurrentLink(1)}
          className={currentLink === 1 ? `active ${theme}` : `${theme}`}
          to={"/AgePredictor"}
        >
          AgePredictor
        </Link>
        <Link
          onClick={() => setCurrentLink(2)}
          className={currentLink === 2 ? `active ${theme}` : `${theme}`}
          to={"/ExcuseFinder"}
        >
          ExcuseFinder
        </Link>
        <Link
          onClick={() => setCurrentLink(3)}
          className={currentLink === 3 ? `active ${theme}` : `${theme}`}
          to={"/Counter"}
        >
          CounterApp
        </Link>
        <div className="last-item">
          <Link
            onClick={() => setCurrentLink(4)}
            className={currentLink === 4 ? `active ${theme}` : `${theme}`}
            to={"/NewProfile"}
          >
            {username}
          </Link>
        </div>
        <button className="emoji">
          {theme === "dark" && (
            <MoonFill
              size={17}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          )}
          {theme === "light" && (
            <SunFill
              size={25}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          )}
        </button>
      </div> */}
    </div>
  );
};
