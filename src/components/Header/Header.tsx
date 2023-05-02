import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-title-container">
        <div className="header-pokeball-image"></div>
        <h1 className="header-title"> PokeSite </h1>
      </div>
      <div className="header-links">
        <NavLink className="navbar-item" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-item" to="/pokedex">
          Pokedex
        </NavLink>
        <NavLink className="navbar-item" to="/pokelist">
          Pokelist
        </NavLink>
      </div>
    </div>
  );
}
