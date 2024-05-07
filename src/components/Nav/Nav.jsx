
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const count = useSelector((state) => state.addToCart.count);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/movie">
              Movie
            </NavLink>
            {/* <NavLink className="nav-link" to="favorites">Favorite ({favoriteMovies.length})</NavLink> */}
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn ms-3 me-3 btn-success" onClick={toggleLanguage}>
            Toggle Language
          </button>
          <div className="me-2 position-relative">
            <Link
              className="nav-link d-inline-block"
              aria-current="page"
              to="/favorite"
            >
              <i className="fa-solid fa-star" style={{ fontSize: "25px", color:"#FF9800" }}></i>
            </Link>
            <span
              style={{ right: "-10px", top: "-6px" }}
              className="badge position-absolute rounded-pill badge-notification bg-danger"
            >
              {count}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


