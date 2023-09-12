import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <span>
              <strong>©</strong> 2023 <strong>4835 Studios</strong>. All Rights
              Reserved.
            </span>

            <div>
              {/* <!-- right menu --> */}
              <ul class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2">
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
                <li class="d-none d-md-block sepy">•</li>
                <li>
                  <a href="term_conditions.html">TERMS</a>
                </li>
                <li class="d-none d-md-block sepy">•</li>
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
