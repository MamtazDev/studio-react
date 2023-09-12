import React from "react";
import audioBanner from "../../../asset/audioBanner.png";
import { Link } from "react-router-dom";
const Audio = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className="pageBg"
            style={{ backgroundImage: `url('${audioBanner}')` }}
          >
            <h1 className="pageHeader">
              Audio <span>Services</span>
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
                <Link className="active" to="/audio">
                  <i className="fa fa-angle-right"></i> Audio
                </Link>
                <Link to="/visual">
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
                <strong>Sonically Driven</strong>
              </h2>

              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="d-flex flex-column gap-2 align-items-center">
                    <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                      <i className="fa fa-microphone"></i>
                    </div>
                    <h4>Recording</h4>
                    <p className="text-center">
                      Music. Voiceovers. PSAs. You can do it all here!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="d-flex flex-column gap-2 align-items-center">
                    <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                      <i className="fa fa-random"></i>
                    </div>
                    <h4>Mixing</h4>
                    <p className="text-center">
                      Add that perfect polish to your audio art.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i className="fa fa-database"></i>
                      </div>
                      <h4>Mastering</h4>
                      <p className="text-center">
                        Perfect preparation for distribution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="d-flex flex-column gap-2 align-items-center">
                    <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                      <i className="fa fa-trophy"></i>
                    </div>
                    <h4>Pro Engineers</h4>
                    <p className="text-center">
                      Top-notch engineers with 15+ years in the game.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="half-margins" />

              <div className="mb-5">
                <h2 className="text-center mb-3">
                  <strong>Rates Snapshot</strong>
                </h2>
                <p className="decMaker text-center">$25/hr Recording Sessions!</p>
              </div>

              <div className="row gy-3 mb-4" style={{ backgroundolor: "#fafafa" }}>
                <div className="col-12 col-md-3">
                  <div className="price-table mx-auto">
                    <h3>HOURLY</h3>
                    <p>
                      $40
                      <span>Per Hour</span>
                    </p>

                    <ul>
                      <li>
                        <strong>Only need a quick session?</strong>
                      </li>
                      <li>Session Engineer</li>
                      <li>–</li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <div className="price-table mx-auto">
                    <h3>BLOCKS</h3>
                    <p>
                      $140
                      <span>4 hour block</span>
                    </p>
                    <ul>
                      <li>
                        <strong>5% Off! Just add 2 or more blocks!</strong>
                      </li>
                      <li>Actual Value: $35-$33/hr</li>
                      <li>Session Engineer</li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <div className="price-table mx-auto">
                    <h3>DAILY</h3>
                    <p>
                      $350
                      <span>Per day (12 hours)</span>
                    </p>
                    <ul className="pricetable-items">
                      <li>
                        <strong>Well ok...it's yours for the day!</strong>
                      </li>
                      <li>Actual Value: $29/hr</li>
                      <li>Session Engineer</li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-3">
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
                    {/* <!-- left text --> */}
                    <h4 className="mb-2">
                      You <strong>Ready?</strong>
                    </h4>
                    <p> Let's get your studio time booked right away!</p>
                  </div>
                  {/* <!-- /left text --> */}

                  <div className="col-12 col-md-3">
                    <div className="text-end">
                      <Link className="btn btn-dark introBtn" to="contact.html">
                        Let's Talk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="half-margins" />
              <div>
                <h3 className="mb-4">We care about our customers</h3>
                <p>
                  Our customers are our most valuable asset. We do everything to
                  accomodate artists and your satifaction is our #1 priority. If
                  there is anything we can do to further enhance your visit with
                  us, please don't hesitate to ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Audio;
