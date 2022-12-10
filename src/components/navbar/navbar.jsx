import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand ms-2" href="#">
          Casperle
        </a>
        <button
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center mx-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <NavLink className="nav-link navstyle" to="/" smooth>
                Home
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink className="nav-link navstyle" to="/about" smooth>
                About me
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink className="nav-link navstyle" to="/services" smooth>
                Services
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink className="nav-link navstyle" to="/testimonial" smooth>
                Testimonial
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
