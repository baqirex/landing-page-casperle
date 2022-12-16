import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = ({ navitems }) => {
  const [navClasses, setNavClasses] = useState({
    nav: "navbar fixed-top bg-white navbar-expand-lg",
    navbrand: "navbar-brand ms-2",
    navToggler:
      "navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around",
    topbar: "toggler-icon top-bar",
    middlebar: "toggler-icon middle-bar",
    bottombar: "toggler-icon bottom-bar",
    navcollapse: "collapse navbar-collapse",
    navul: "navbar-nav ms-auto text-center mx-auto mb-2 mb-lg-0",
    navitem: "nav-item m-2",
    navlink: "nav-link navstyle",
  });

  return (
    <nav className={navClasses.nav}>
      <div className="container-fluid">
        <a className={navClasses.navbrand} href="#">
          Casperle
        </a>
        <button
          className={navClasses.navToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={navClasses.topbar}></span>
          <span className={navClasses.middlebar}></span>
          <span className={navClasses.bottombar}></span>
        </button>
        <div className={navClasses.navcollapse} id="navbarSupportedContent">
          <ul className={navClasses.navul}>
            {navitems.map((item) => (
              <li className={navClasses.navitem} key={item.path}>
                <NavLink className={navClasses.navlink} to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
