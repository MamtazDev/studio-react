import React from "react";
import visualBanner from "../../../asset/visualBanner.png";
import { Link } from "react-router-dom";
const Visual = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div
              className="pageBg"
              style={{ backgroundImage: `url('${visualBanner}')` }}
            >
              <h1 className="pageHeader">
                Visual <span>Services</span>
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
                <Link to="/audio">
                  <i className="fa fa-angle-right"></i> Audio
                </Link>
                <Link to="/visual" className="active">
                  <i className="fa fa-angle-right"></i> Visual
                </Link>
                <Link to="/digital">
                  <i className="fa fa-angle-right"></i> Digital
                </Link>
                <Link to="/promotional">
                  <i className="fa fa-angle-right"></i> Promotional
                </Link>
                </div>
              </div>

              <div className="col-md-9">
                <h2 className="mb-5 text-center">
                  <strong>Visualization =</strong>{" "}
                  <span style={{ color: "#F07057" }}>Visual</span>{" "}
                </h2>

                <div className="row gy-3">
                  <div className="col-12 col-md-3">
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i className="fa fa-video-camera"></i>
                      </div>
                      <h4>Videos</h4>
                      <p className="text-center">
                        Videos that bring music to life.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i className="fa fa-film"></i>
                      </div>
                      <h4>Films</h4>
                      <p className="text-center">
                        Short or Full-length film production.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="d-flex flex-column gap-4 h-100">
                      <div className="d-flex flex-column gap-2 align-items-center">
                        <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                          <i className="fa fa-birthday-cake"></i>
                        </div>
                        <h4>Events</h4>
                        <p className="text-center">
                          Moments captured and enhanced.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i className="fa fa-trophy"></i>
                      </div>
                      <h4>Pro Crew</h4>
                      <p className="text-center">Award-winning production crew.</p>
                    </div>
                  </div>
                </div>

                <hr className="half-margins" />

                <div className="mb-5">
                  <h2 className="text-center mb-3">
                    <strong>Rates Snapshot</strong>
                  </h2>
                  <p className="decMaker text-center">
                    Let us produce your next visual project today!
                  </p>
                </div>

                <div className="row gy-3 mb-4 bg_dark">
                  <div className="col-12 col-md-4">
                    <div className="price-table bg_dark mx-auto">
                      <h3 className="text-white">BLOCKS</h3>
                      <p className="text-white">
                        $140
                        <span>4 hour block</span>
                      </p>
                      <ul>
                        <li className="text-white">
                          <strong>5% Off! Just add 2 or more blocks!</strong>
                        </li>
                        <li className="text-white">Actual Value: $35-$33/hr</li>
                        <li className="text-white">Session Engineer</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="price-table bg_dark mx-auto">
                      <h3 className="text-white">DAILY</h3>
                      <p className="text-white">
                        $350
                        <span>Per day (12 hours)</span>
                      </p>
                      <ul className="pricetable-items">
                        <li className="text-white">
                          <strong>Well ok...it's yours for the day!</strong>
                        </li>
                        <li className="text-white">Actual Value: $29/hr</li>
                        <li className="text-white">Session Engineer</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="price-table bg_dark">
                      <h3 className="text-white">WEEKLY</h3>
                      <p className="text-white">
                        $1500
                        <span>Per week (60 hours)</span>
                      </p>
                      <ul>
                        <li className="text-white">
                          <strong>Recording for $25/hr! Yall crazy!</strong>
                        </li>
                        <li className="text-white">Actual Value: $25/hr!!!</li>
                        <li className="text-white">Session Engineer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bgCall">
                  <div className="row gy-3 align-items-center">
                    <div className="col-12 col-md-9">
                      <h4 className="mb-2">
                        You <strong>Ready?</strong>
                      </h4>
                      <p> Let's get your next video production scheduled!</p>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="text-end">
                        <a className="btn btn-dark introBtn" href="contact.html">
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
          {/* </div> */}
        </section>
      </main>
    </div>
  );
};

export default Visual;
