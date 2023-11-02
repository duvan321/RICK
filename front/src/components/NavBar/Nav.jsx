import SearchBar from "../SearchBar/SearchBar";
import stayle from "../NavBar/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Nav = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const NumRandom = Math.floor(Math.random() * (826 - 1 + 1)) + 1;

  const characters = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  const agree = () => {
    dispatch(onSearch(NumRandom, characters));
  };
  return (
    <nav className={stayle.div}>
      <div
        className={stayle.menu}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <line x1="21" x2="3" y1="10" y2="10" />
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="21" x2="3" y1="14" y2="14" />
          <line x1="21" x2="3" y1="18" y2="18" />
        </svg>
      </div>{" "}
      <ul className={menuOpen ? stayle.open : ""}>
        <NavLink to="/home">
          <li className={stayle.botone1}>Home</li>
        </NavLink>
        <NavLink to="/personajes">
          <li className={stayle.botone2}>Personajes</li>
        </NavLink>
        <NavLink to="/favorites">
          <li className={stayle.botone3}>Favorite</li>
        </NavLink>
        <NavLink to="/">
          <li className={stayle.botone4}>Salir</li>
        </NavLink>
        <li className={stayle.botone5} onClick={agree}>
          Personaje Random
        </li>
        <li className={stayle.searchBar}>
          <SearchBar onSearch={onSearch} />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
