import React from "react";
import promotionalBanner from "../../../asset/promotionalBanner.png";
import { Link } from "react-router-dom";

const Promotional = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div
              className="pageBg"
              style={{ backgroundImage: `url('${promotionalBanner}')` }}
            >
              <h1 className="pageHeader">
                Promotional <span>Services</span>
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
                <Link to="/visual">
                  <i className="fa fa-angle-right"></i> Visual
                </Link>
                <Link to="/digital">
                  <i className="fa fa-angle-right"></i> Digital
                </Link>
                <Link to="/promotional" className="active">
                  <i className="fa fa-angle-right"></i> Promotional
                </Link>
                </div>
              </div>

              <div className="col-md-9">
                <div className="mb-5 d-flex flex-column gap-2">
                  <h2 className="mb-3 text-center">
                    <strong>Being seen and heard is the first step</strong>
                  </h2>
                  <p className="lead mb-3">
                    We use our marketing expertise and resources to raise
                    awareness of great artists, products & brands, as well as
                    help clients generate sales and create brand loyalty. By
                    leveraging technology, we are able to amplify communications
                    and strengthen customer relationships with the brands they
                    love.
                  </p>
                  <div className="table-responsive">
                    <table className="table table-striped promotionTable">
                      {/* <!-- table head --> */}
                      <thead>
                        <tr>
                          <th>SERVICE</th>
                          <th className="text-center">Musicians</th>
                          <th className="text-center">Products</th>
                          <th className="text-center">Services</th>
                        </tr>
                      </thead>

                      {/* <!-- table items --> */}
                      <tbody>
                        <tr>
                          <td>
                            Online Promotion
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Commercials
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Music Licensing
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                        </tr>
                        <tr>
                          <td>
                            Youtube Marketing
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Public Service Announcements
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Social Media Marketing
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Online Music Placement
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                        </tr>
                        <tr>
                          <td>
                            Email Communications
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Project Fundraising
                            <a href="#">
                              <i className="fa fa-question-circle"></i>
                            </a>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check"></i>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bgCall">
                  <div className="row gy-3 align-items-center">
                    <div className="col-12 col-md-9">
                      {/* <!-- left text --> */}
                      <h4 className="mb-2">
                        Ready to delivery your new project to the{" "}
                        <strong>world?</strong>
                      </h4>
                      <p>
                        {" "}
                        Let's promote your product, project, or career today!
                      </p>
                    </div>
                    {/* <!-- /left text --> */}

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
        </section>
      </main>
    </div>
  );
};

export default Promotional;
