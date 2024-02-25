import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink
          to="/"
          className="link"
          activeClassName="active"
          exact
          as="button"
        >
          Books List
        </NavLink>
        <NavLink
          to="/add"
          className="link"
          activeClassName="active"
          as="button"
        >
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
