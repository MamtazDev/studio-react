import React from "react";
import logo from "../../images/logo-4835studios.png";
const Navbar = () => {
  return (
    <>
  <header>
  <nav class="navbar navbar-expand-lg p-0">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="LOGO" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
            <i class="fa fa-bars text-white"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown p-0 m-0">
                <a
                  class="nav-link active dropdown-toggle"
                  href="/theStudio"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  The Studio
                </a>
                <ul
                  class="dropdown-menu p-0 m-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="/theStudio">
                      The Studio
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/team">
                      Team
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  class="dropdown-menu p-0 m-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="/service">
                      Services
                    </a>
                  </li>
                  <li class="p-0 m-0">
                    <hr class="dropdown-divider m-0" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/audio">
                      Audio
                    </a>
                  </li>
                  <li class="p-0 m-0">
                    <hr class="dropdown-divider m-0" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/visual">
                      Visual
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider m-0" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/digital">
                      Digital
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider m-0" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/promotional">
                      Promotional
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">
                  Blog
                </a>
              </li>

              <li class="nav-item dropdown p-0 m-0">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul
                  class="dropdown-menu p-0 m-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="/contact">
                      Conatct
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/career">
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
