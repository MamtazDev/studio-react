import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <span>
              <strong>©</strong> 2023 <strong>4835 Studios</strong>. All Rights
              Reserved.
            </span>

            <div>
              {/* <!-- right menu --> */}
              <ul className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2">
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
                <li className="d-none d-md-block sepy">•</li>
                <li>
                  <a href="term_conditions.html">TERMS</a>
                </li>
                <li className="d-none d-md-block sepy">•</li>
                <li>
                  <a href="contact.html">FOLLOW US</a>
                </li>
              </ul>
              {/* <!-- /right menu --> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
