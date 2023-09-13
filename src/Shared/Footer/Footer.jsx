import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <span>
              <strong>©</strong> 2023 <strong>4835 Studios</strong>. All Rights
              Reserved.
            </span>

            <div>
              <ul className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2">
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li className="d-none d-md-block sepy">•</li>
                <li>
                  <Link to="/termConditions">TERMS</Link>
                </li>
                <li className="d-none d-md-block sepy">•</li>
                <li>
                  <Link to="/contact">FOLLOW US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
