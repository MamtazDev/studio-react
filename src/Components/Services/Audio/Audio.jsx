import React from "react";
import audioBanner from "../../../asset/audioBanner.png"
const Audio = () => {
  return (
    <>
      <section>
        <div class="container">
          <div
            class="pageBg"
            style={{ backgroundImage: `url('${audioBanner}')` }}
          >
            <h1 class="pageHeader">
              Audio <span>Services</span>
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
                <a class="active" href="/audio">
                  <i class="fa fa-angle-right"></i> Audio
                </a>
                <a href="/visual">
                  <i class="fa fa-angle-right"></i> Visual
                </a>
                <a href="/digital">
                  <i class="fa fa-angle-right"></i> Digital
                </a>
                <a href="/promotional">
                  <i class="fa fa-angle-right"></i> Promotional
                </a>
              </div>
            </div>

            <div class="col-md-9">
              <h2 class="mb-5 text-center">
                <strong>Sonically Driven</strong>
              </h2>

              <div class="row">
                <div class="col-12 col-md-3">
                  <div class="d-flex flex-column gap-2 align-items-center">
                    <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                      <i class="fa fa-microphone"></i>
                    </div>
                    <h4>Recording</h4>
                    <p class="text-center">
                      Music. Voiceovers. PSAs. You can do it all here!
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-3">
                  <div class="d-flex flex-column gap-2 align-items-center">
                    <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                      <i class="fa fa-random"></i>
                    </div>
                    <h4>Mixing</h4>
                    <p class="text-center">
                      Add that perfect polish to your audio art.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-3">
                  <div class="d-flex flex-column gap-4 h-100">
                    <div class="d-flex flex-column gap-2 align-items-center">
                      <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                        <i class="fa fa-database"></i>
                      </div>
                      <h4>Mastering</h4>
                      <p class="text-center">
                        Perfect preparation for distribution.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3">
                  <div class="d-flex flex-column gap-2 align-items-center">
                    <div class="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                      <i class="fa fa-trophy"></i>
                    </div>
                    <h4>Pro Engineers</h4>
                    <p class="text-center">
                      Top-notch engineers with 15+ years in the game.
                    </p>
                  </div>
                </div>
              </div>

              <hr class="half-margins" />

              <div class="mb-5">
                <h2 class="text-center mb-3">
                  <strong>Rates Snapshot</strong>
                </h2>
                <p class="decMaker text-center">$25/hr Recording Sessions!</p>
              </div>

              <div class="row gy-3 mb-4" style={{backgroundolor: "#fafafa"}}>
                <div class="col-12 col-md-3">
                  <div class="price-table mx-auto">
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

                <div class="col-12 col-md-3">
                  <div class="price-table mx-auto">
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

                <div class="col-12 col-md-3">
                  <div class="price-table mx-auto">
                    <h3>DAILY</h3>
                    <p>
                      $350
                      <span>Per day (12 hours)</span>
                    </p>
                    <ul class="pricetable-items">
                      <li>
                        <strong>Well ok...it's yours for the day!</strong>
                      </li>
                      <li>Actual Value: $29/hr</li>
                      <li>Session Engineer</li>
                    </ul>
                  </div>
                </div>

                <div class="col-12 col-md-3">
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
                    <p> Let's get your studio time booked right away!</p>
                  </div>
                  {/* <!-- /left text --> */}

                  <div class="col-12 col-md-3">
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
