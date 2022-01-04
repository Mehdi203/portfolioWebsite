import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bgcolor fixed-top">
      <div className="container">
        <div className="container-fluid">
          {/*<Link className="navbar-brand" href="/#">
            Navbar
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  smooth={false}
                  activeClass="active"
                  offset={-110}
                  to="home"
                  className="nav-link"
                  href="/#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={false}
                  activeClass="active"
                  offset={-110}
                  to="about"
                  className="nav-link"
                  href="/#"
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={false}
                  activeClass="active"
                  offset={-110}
                  to="exprience"
                  className="nav-link"
                  href="/#"
                >
                  Exprience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={false}
                  activeClass="active"
                  offset={-110}
                  to="portfolio"
                  className="nav-link"
                  href="/#"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={false}
                  activeClass="active"
                  offset={-110}
                  to="contacts"
                  className="nav-link"
                  href="/#"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
