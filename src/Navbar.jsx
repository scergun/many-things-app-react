import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, ThemeContext } from "./App.jsx";

import { MoonFill, SunFill } from "react-bootstrap-icons";

export const Navbar = () => {
  const { username, currentLink, setCurrentLink } = useContext(AppContext);
  const { theme, setTheme } = useContext(ThemeContext);

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
    </div>
  );
};
