import React from "react";
import service1 from "../../../asset/service1.jpg";
import service2 from "../../../asset/service2.jpg";
import service3 from "../../../asset/service3.jpg";
import theStudioBanner from "../../../asset/theStudioBanner.png";

const TheStudio = () => {
  return (
    <div>
      <main>
        <section>
          <div class="container">
            <div
              class="pageBg"
              style={{ backgroundImage: `url('${theStudioBanner}')` }}
            >
              <h1 class="pageHeader">
                The <span>Studio</span>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row mb_60 gy-5">
              <div class="col-md-3">
                <div class="sideBar d-flex flex-column gap-2 justify-content-start">
                  <a class="active" href="/theStudio">
                    <i class="fa fa-angle-right"></i> The Studio
                  </a>
                  <a href="/team">
                    <i class="fa fa-angle-right"></i> Team
                  </a>
                </div>
              </div>

              <div class="col-md-9">
                <div>
                  <div class="d-flex flex-column gap-4">
                    <h3>
                      Why you should chose 4835<strong>Studios</strong>?
                    </h3>
                    <p>
                      For Artists. By Artists. Our studio encompasses everything
                      we as artists need to comfortably produce our audio or
                      video-based art. At 4835<strong>Studios</strong>
                      you can produce audio, visual and digital media projects.
                    </p>
                    <ul class="serviceList">
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

                <div class="divider half-margins">{/* <!-- divider --> */}</div>
                <div class="d-flex flex-column gap-4">
                  <h3>
                    We've <strong>offer...</strong>
                  </h3>
                  <div class="row gy-3">
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-music"></i>
                        </div>
                        <h4>Audio Services</h4>
                      </div>
                      <p>
                        Recording, mixing and mastering of all audio projects
                        from music to PSAs.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-video-camera"></i>
                        </div>
                        <h4>Visual Services</h4>
                      </div>
                      <p>
                        Music video, film and event production that is
                        guaranteed to excite your audience.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-cloud-upload"></i>
                        </div>
                        <h4>Digital Media Services</h4>
                      </div>
                      <p>
                        Branding, design and web development for artists to
                        further their brand for optimal reach.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-check"></i>
                        </div>
                        <h4>State-Of-The-Art Gear</h4>
                      </div>
                      <p>
                        Digital or analog, you'll produce with top-notch audio
                        and video equipment.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-map-marker"></i>
                        </div>
                        <h4>A Great Location</h4>
                      </div>
                      <p>
                        We are located in a great Albany Park location on the
                        northwest side. We offer sufficient parking.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-building"></i>
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
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-bed"></i>
                        </div>
                        <h4>Extended Stay Packages</h4>
                      </div>
                      <p>
                        Some projects just take longer than others. Rent our
                        entire facility for a week or more.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start gap-2 align-items-center mb-3">
                        <div class="serviceIcon d-flex justify-content-center align-items-center">
                          <i class="fa fa-gamepad"></i>
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
                <div class="divider half-margins">{/* <!-- divider --> */}</div>
                <div class="d-flex flex-column gap-4">
                  <p class="lead">
                    We strive to provide a safe and comfortable facility to
                    produce your art.
                  </p>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <h4 class="mb-3">
                        <strong>
                          4835<span style={{ color: "#F07057" }}>Studios</span>
                        </strong>{" "}
                        amenities includes:
                      </h4>

                      <ul class="serviceList">
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
                    <div class="col-12 col-md-6">
                      <div
                        id="carouselExampleSlidesOnly"
                        class="carousel slide studioImg"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner ">
                          <div class="carousel-item active">
                            <img
                              src={service1}
                              class="d-block img-fluid w-100"
                              alt="Image Service"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src={service2}
                              class="d-block w-100 img-fluid"
                              alt="Image Service"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src={service3}
                              class="d-block w-100 img-fluid"
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
