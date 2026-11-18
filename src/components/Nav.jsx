import React from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../assets/fes-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Nav = ({ setSearch }) => {
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const movieName = event.target.elements.searchInput.value;

    setSearch(movieName)
    navigate('/')
  }

  return (
    <div className="root">
      <nav className="nav">
        <div className="logo">
          <img src={NavLogo} alt="" className="logo__img" />
          <div className="logo__title">
            <span>Simplified</span> Flix
          </div>
        </div>
        <form
          className="search-form"
          id="searchForm"
          name="searchForm"
          onSubmit={handleSearch}
        >
          <div className="search-form__group">
            <label htmlFor="searchInput"></label>
            <input
              type="text"
              className="search-form__input"
              id="searchInput"
              placeholder="Search Movies..."
              required
              name="searchInput"
            />
            <button
              className="search-form__button"
              type="submit"
              aria-label="Search"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-form__icon"
              />
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
};

export default Nav;
