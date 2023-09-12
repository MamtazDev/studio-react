import React from "react";
import promotionalBanner from "../../../asset/promotionalBanner.png";

const Promotional = () => {
  return (
    <div>
      <main>
        <section>
          <div class="container">
            <div
              class="pageBg"
              style={{ backgroundImage: `url('${promotionalBanner}')` }}
            >
              <h1 class="pageHeader">
                Promotional <span>Services</span>
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
                  <a href="/visual">
                    <i class="fa fa-angle-right"></i> Visual
                  </a>
                  <a href="/digital">
                    <i class="fa fa-angle-right"></i> Digital
                  </a>
                  <a class="active" href="promotional.html">
                    <i class="fa fa-angle-right"></i> Promotional
                  </a>
                </div>
              </div>

              <div class="col-md-9">
                <div class="mb-5 d-flex flex-column gap-2">
                  <h2 class="mb-3 text-center">
                    <strong>Being seen and heard is the first step</strong>
                  </h2>
                  <p class="lead mb-3">
                    We use our marketing expertise and resources to raise
                    awareness of great artists, products & brands, as well as
                    help clients generate sales and create brand loyalty. By
                    leveraging technology, we are able to amplify communications
                    and strengthen customer relationships with the brands they
                    love.
                  </p>
                  <div class="table-responsive">
                    <table class="table table-striped promotionTable">
                      {/* <!-- table head --> */}
                      <thead>
                        <tr>
                          <th>SERVICE</th>
                          <th class="text-center">Musicians</th>
                          <th class="text-center">Products</th>
                          <th class="text-center">Services</th>
                        </tr>
                      </thead>

                      {/* <!-- table items --> */}
                      <tbody>
                        <tr>
                          <td>
                            Online Promotion
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Commercials
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Music Licensing
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                        </tr>
                        <tr>
                          <td>
                            Youtube Marketing
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Public Service Announcements
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Social Media Marketing
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Online Music Placement
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                        </tr>
                        <tr>
                          <td>
                            Email Communications
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Project Fundraising
                            <a href="#">
                              <i class="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td class="text-center">
                            <i class="fa fa-check"></i>
                          </td>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="bgCall">
                  <div class="row gy-3 align-items-center">
                    <div class="col-12 col-md-9">
                      {/* <!-- left text --> */}
                      <h4 class="mb-2">
                        Ready to delivery your new project to the{" "}
                        <strong>world?</strong>
                      </h4>
                      <p>
                        {" "}
                        Let's promote your product, project, or career today!
                      </p>
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

export default Promotional;
