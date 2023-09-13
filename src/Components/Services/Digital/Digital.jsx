import React from "react";
import digitalBanner from "../../../asset/digitalBanner.png";
import { Link } from "react-router-dom";
const Digital = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div
              className="pageBg"
              style={{ backgroundImage: `url('${digitalBanner}')` }}
            >
              <h1 className="pageHeader">
                Digital <span>Services</span>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mb_60 gy-5">
              <div className="col-md-3">
                <div className="sideBar d-flex flex-column gap-2 justify-content-start">
                <Link to="/service">
                  <i className="fa fa-angle-right"></i> Services
                </Link>
                <Link  to="/audio">
                  <i className="fa fa-angle-right"></i> Audio
                </Link>
                <Link to="/visual">
                  <i className="fa fa-angle-right"></i> Visual
                </Link>
                <Link to="/digital" className="active">
                  <i className="fa fa-angle-right"></i> Digital
                </Link>
                <Link to="/promotional">
                  <i className="fa fa-angle-right"></i> Promotional
                </Link>
                </div>
              </div>

              <div className="col-md-9">
                <div className="mb-5 d-flex flex-column gap-2">
                  <h2 className="mb-3 text-center">
                    <strong>Interactive architects ready to build</strong>
                  </h2>
                  <p className="lead mb-3">
                    We create engaging interactive experiences to advance
                    businesses and build brand recognition. We are expert
                    architects in the interactive space, helping our clients
                    realize their brand's potential.
                  </p>
                  <p>
                    We approach all engagements with tremendous attention to
                    "problem solving". What is the business problem that needs a
                    solution (or many)? Sometimes it's finding better ways to
                    interact with customers or creating a new distribution
                    channel or enhancing social media presence or creating a
                    brand that is highly-visible, or even boosting revenue
                    and/or productivity.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="alert alert-warning">
                      <strong>STRATEGY.</strong>
                      <small>
                        We create strategies that are designed to implement your
                        business objectives, providing a foundation for aligning
                        user-experience, design, and technology.
                      </small>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="alert alert-warning">
                      <strong>DESIGN.</strong>
                      <small>
                        A compelling design can engage your customers and
                        invigorate your brand. We strive to deliver
                        extraordinary visuals that make an impact.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="alert alert-warning">
                      <strong>DEVELOPMENT.</strong>
                      <small>
                        As software architects, we leverage best-in-className
                        technologies to deliver solid, high-quality technology
                        assets.
                      </small>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="alert alert-warning">
                      <strong>MEASUREMENT.</strong>
                      <small>
                        We provide extensive reporting &amp; analytics in order
                        to better guage the performance of your applications.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="divider half-margins">{/* <!-- divider --> */}</div>
                <div className="row gy-3 mb_60">
                  <div className="col-12 col-md-4">
                    <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                      <div className="serviceIcon d-flex justify-content-center align-items-center">
                        <i className="fa fa-desktop"></i>
                      </div>
                      <h4>Web</h4>
                    </div>
                    <ul className="serviceList mx-auto">
                      <li>Website/Microsite Design</li>
                      <li>Web Application Development</li>
                      <li>Blog Development</li>
                      <li>Email Communications</li>
                      <li>Database Development</li>
                      <li>Integration with Google</li>
                      <li>Content Management Systems</li>
                    </ul>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                      <div className="serviceIcon d-flex justify-content-center align-items-center">
                        <i className="fa fa-mobile-phone"></i>
                      </div>
                      <h4>Mobile</h4>
                    </div>
                    <ul className="serviceList mx-auto">
                      <li>Native iOS Development</li>
                      <li>Native Android Development</li>
                      <li>Mobile Web Apps (Responsive)</li>
                      <li>Google Play &amp; Apple Store Setup</li>
                      <li>In-App Purchase Strategy</li>
                    </ul>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                      <div className="serviceIcon d-flex justify-content-center align-items-center">
                        <i className="fa fa-comments"></i>
                      </div>
                      <h4>Social</h4>
                    </div>
                    <ul className="serviceList mx-auto">
                      <li>Facebook Business/Fan Pages</li>
                      <li>Twitter Page Design</li>
                      <li>YouTube Video Management</li>
                    </ul>
                  </div>
                </div>
                <div className="bgCall">
                  <div className="row gy-3 align-items-center">
                    <div className="col-12 col-md-9">
                      {/* <!-- left text --> */}
                      <h4 className="mb-2">
                        Got a digital project that needs{" "}
                        <strong>attention?</strong>
                      </h4>
                      <p> Let's get started with a consultation today!</p>
                    </div>
                    {/* <!-- /left text --> */}

                    <div className="col-12 col-md-3">
                      <div className="text-end">
                        <a className="btn btn-dark introBtn" href="/contact">
                          Let's Talk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="half-margins" />
                <div>
                  <h3 className="mb-4">We care about our customers</h3>
                  <p>
                    Our customers are our most valuable asset. We do everything
                    to accomodate artists and your satifaction is our #1
                    priority. If there is anything we can do to further enhance
                    your visit with us, please don't hesitate to ask.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Digital;
