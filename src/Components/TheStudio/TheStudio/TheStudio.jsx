import React from "react";
import service1 from "../../../asset/service1.jpg";
import service2 from "../../../asset/service2.jpg";
import service3 from "../../../asset/service3.jpg";
import theStudioBanner from "../../../asset/theStudioBanner.png";
import { Link } from "react-router-dom";
const TheStudio = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div
              className="pageBg"
              style={{ backgroundImage: `url('${theStudioBanner}')` }}
            >
              <h1 className="pageHeader">
                The <span>Studio</span>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mb_60 gy-5">
              <div className="col-md-3">
                <div className="sideBar d-flex flex-column gap-2 justify-content-start">
                  <Link className="active" to="/theStudio">
                    <i className="fa fa-angle-right"></i> The Studio
                  </Link>
                  <Link to="/team">
                    <i className="fa fa-angle-right"></i> Team
                  </Link>
                </div>
       
              </div>

              <div className="col-md-9">
                <div>
                  <div className="d-flex flex-column gap-4">
                    <h3>
                      Why you should chose 4835<strong>Studios</strong>?
                    </h3>
                    <p>
                      For Artists. By Artists. Our studio encompasses everything
                      we as artists need to comfortably produce our audio or
                      video-based art. At 4835<strong>Studios</strong>
                      you can produce audio, visual and digital media projects.
                    </p>
                    <ul className="serviceList">
                      <li>
                        Most affordable! Recording for only{" "}
                        <strong>
                          <a href="/audio" style={{ color: "#F07057" }}>
                            $25/hr
                          </a>
                        </strong>
                        !
                      </li>
                      <li>Audio, Video and Digital Media</li>
                      <li>Friendly and Experienced Staff</li>
                    </ul>
                  </div>
                </div>

                <div className="divider half-margins">{/* <!-- divider --> */}</div>
                <div className="d-flex flex-column gap-4">
                  <h3>
                    We've <strong>offer...</strong>
                  </h3>
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-music"></i>
                        </div>
                        <h4>Audio Services</h4>
                      </div>
                      <p>
                        Recording, mixing and mastering of all audio projects
                        from music to PSAs.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-video-camera"></i>
                        </div>
                        <h4>Visual Services</h4>
                      </div>
                      <p>
                        Music video, film and event production that is
                        guaranteed to excite your audience.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-cloud-upload"></i>
                        </div>
                        <h4>Digital Media Services</h4>
                      </div>
                      <p>
                        Branding, design and web development for artists to
                        further their brand for optimal reach.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-check"></i>
                        </div>
                        <h4>State-Of-The-Art Gear</h4>
                      </div>
                      <p>
                        Digital or analog, you'll produce with top-notch audio
                        and video equipment.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <h4>A Great Location</h4>
                      </div>
                      <p>
                        We are located in a great Albany Park location on the
                        northwest side. We offer sufficient parking.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-building"></i>
                        </div>
                        <h4>
                          A 4000 ft<sup>2</sup> Facility
                        </h4>
                      </div>
                      <p>
                        Go big or go home! We've built an incredible space to
                        deliver an incredible artist experience.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-bed"></i>
                        </div>
                        <h4>Extended Stay Packages</h4>
                      </div>
                      <p>
                        Some projects just take longer than others. Rent our
                        entire facility for a week or more.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div className="serviceIcon d-flex justify-content-center align-items-center">
                          <i className="fa fa-gamepad"></i>
                        </div>
                        <h4>Accomodations</h4>
                      </div>
                      <p>
                        Lounge with games and much more. We also have a bar,
                        kitchen and huge music selection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider half-margins">{/* <!-- divider --> */}</div>
                <div className="d-flex flex-column gap-4">
                  <p className="lead">
                    We strive to provide a safe and comfortable facility to
                    produce your art.
                  </p>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h4 className="mb-3">
                        <strong>
                          4835<span style={{ color: "#F07057" }}>Studios</span>
                        </strong>{" "}
                        amenities includes:
                      </h4>

                      <ul className="serviceList">
                        <li>Conference Rooms</li>
                        <li>Private Rest Area</li>
                        <li>High-speed Internet</li>
                        <li>Fully-stocked Vending Machine</li>
                        <li>Lounge</li>
                        <li>Netflix</li>
                        <li>Bar</li>
                        <li>Pool Table</li>
                        <li>Shuffle-board Table</li>
                        <li>Video Games</li>
                        <li>Shower</li>
                        <li>Washer &amp; Dryer</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide studioImg"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner ">
                          <div className="carousel-item active">
                            <img
                              src={service1}
                              className="d-block img-fluid w-100"
                              alt="Image Service"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={service2}
                              className="d-block w-100 img-fluid"
                              alt="Image Service"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={service3}
                              className="d-block w-100 img-fluid"
                              alt="Image Service"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TheStudio;
