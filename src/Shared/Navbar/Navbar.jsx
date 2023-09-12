import React from "react";
import logo from "../../images/logo-4835studios.png";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="LOGO" />
            </a>
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
                  <a
                    className="nav-link active dropdown-toggle"
                    href="/theStudio"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    The Studio
                  </a>
                  <ul
                    className="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/theStudio">
                        The Studio
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/team">
                        Team
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/service">
                        Services
                      </a>
                    </li>
                    <li className="p-0 m-0">
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/audio">
                        Audio
                      </a>
                    </li>
                    <li className="p-0 m-0">
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/visual">
                        Visual
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/digital">
                        Digital
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/promotional">
                        Promotional
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>

                <li className="nav-item dropdown p-0 m-0">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact
                  </a>
                  <ul
                    className="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/contact">
                        Conatct
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/career">
                        Careers
                      </a>
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
