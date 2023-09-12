import React from "react";
import visualBanner from "../../../asset/visualBanner.png";
const Visual = () => {
  return (
    <div>
      <main>
        <section>
          <div class="container">
            <div
              class="pageBg"
              style={{ backgroundImage: `url('${visualBanner}')` }}
            >
              <h1 class="pageHeader">
                Visual <span>Services</span>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row mb_60 gy-5">
              <div class="col-md-3">
                <div class="sideBar d-flex flex-column gap-2 justify-content-start">
                  <a href="/service">
                    <i class="fa fa-angle-right"></i> Services
                  </a>
                  <a href="/audio">
                    <i class="fa fa-angle-right"></i> Audio
                  </a>
                  <a class="active" href="/visual">
                    <i class="fa fa-angle-right"></i> Visual
                  </a>
                  <a href="/digital">
                    <i class="fa fa-angle-right"></i> Digital
                  </a>
                  <a href="promotional.html">
                    <i class="fa fa-angle-right"></i> Promotional
                  </a>
                </div>
              </div>

              <div class="col-md-9">
                <h2 class="mb-5 text-center">
                  <strong>Visualization =</strong>{" "}
                  <span style={{ color: "#F07057" }}>Visual</span>{" "}
                </h2>

                <div class="row gy-3">
                  <div class="col-12 col-md-3">
                    <div class="d-flex flex-column gap-2 align-items-center">
                      <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i class="fa fa-video-camera"></i>
                      </div>
                      <h4>Videos</h4>
                      <p class="text-center">
                        Videos that bring music to life.
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="d-flex flex-column gap-2 align-items-center">
                      <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i class="fa fa-film"></i>
                      </div>
                      <h4>Films</h4>
                      <p class="text-center">
                        Short or Full-length film production.
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="d-flex flex-column gap-4 h-100">
                      <div class="d-flex flex-column gap-2 align-items-center">
                        <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                          <i class="fa fa-birthday-cake"></i>
                        </div>
                        <h4>Events</h4>
                        <p class="text-center">
                          Moments captured and enhanced.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="d-flex flex-column gap-2 align-items-center">
                      <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i class="fa fa-trophy"></i>
                      </div>
                      <h4>Pro Crew</h4>
                      <p class="text-center">Award-winning production crew.</p>
                    </div>
                  </div>
                </div>

                <hr class="half-margins" />

                <div class="mb-5">
                  <h2 class="text-center mb-3">
                    <strong>Rates Snapshot</strong>
                  </h2>
                  <p class="decMaker text-center">
                    Let us produce your next visual project today!
                  </p>
                </div>

                <div class="row gy-3 mb-4 bg_dark">
                  <div class="col-12 col-md-4">
                    <div class="price-table bg_dark mx-auto">
                      <h3 class="text-white">BLOCKS</h3>
                      <p class="text-white">
                        $140
                        <span>4 hour block</span>
                      </p>
                      <ul>
                        <li class="text-white">
                          <strong>5% Off! Just add 2 or more blocks!</strong>
                        </li>
                        <li class="text-white">Actual Value: $35-$33/hr</li>
                        <li class="text-white">Session Engineer</li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="price-table bg_dark mx-auto">
                      <h3 class="text-white">DAILY</h3>
                      <p class="text-white">
                        $350
                        <span>Per day (12 hours)</span>
                      </p>
                      <ul class="pricetable-items">
                        <li class="text-white">
                          <strong>Well ok...it's yours for the day!</strong>
                        </li>
                        <li class="text-white">Actual Value: $29/hr</li>
                        <li class="text-white">Session Engineer</li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="price-table bg_dark">
                      <h3 class="text-white">WEEKLY</h3>
                      <p class="text-white">
                        $1500
                        <span>Per week (60 hours)</span>
                      </p>
                      <ul>
                        <li class="text-white">
                          <strong>Recording for $25/hr! Yall crazy!</strong>
                        </li>
                        <li class="text-white">Actual Value: $25/hr!!!</li>
                        <li class="text-white">Session Engineer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bgCall">
                  <div class="row gy-3 align-items-center">
                    <div class="col-12 col-md-9">
                      {/* <!-- left text --> */}
                      <h4 class="mb-2">
                        You <strong>Ready?</strong>
                      </h4>
                      <p> Let's get your next video production scheduled!</p>
                    </div>
                    {/* <!-- /left text --> */}

                    <div class="col-12 col-md-3">
                      {/* <!-- right btn --> */}
                      <div class="text-end">
                        <a class="btn btn-dark introBtn" href="contact.html">
                          Let's Talk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="half-margins" />
                <div>
                  <h3 class="mb-4">We care about our customers</h3>
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
