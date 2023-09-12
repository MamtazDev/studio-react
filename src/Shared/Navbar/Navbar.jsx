import React from "react";
import logo from "../../images/logo-4835studios.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="LOGO" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-white"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown p-0 m-0">
                  <Link
                    className="nav-link active dropdown-toggle"
                    to="/theStudio"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    The Studio
                  </Link>
                  <ul
                    className="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/theStudio">
                        The Studio
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/team">
                        Team
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/service">
                        Services
                      </Link>
                    </li>
                    <li className="p-0 m-0">
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/audio">
                        Audio
                      </Link>
                    </li>
                    <li className="p-0 m-0">
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/visual">
                        Visual
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/digital">
                        Digital
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/promotional">
                        Promotional
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>

                <li className="nav-item dropdown p-0 m-0">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact
                  </Link>
                  <ul
                    className="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/contact">
                        Conatct
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/career">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
