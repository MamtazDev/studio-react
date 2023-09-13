import React from "react";
import theStudioBanner from "../../../asset/theTeamBanner.png";
import mike from "../../../asset/Mike_1.jpg";
import anna from "../../../asset/Anna_1.jpg";
import emily from "../../../asset/Emily_1.jpg";
import charia from "../../../asset/Charia_1.jpg";
import rob from "../../../asset/Rob_1.jpg";
import shawna from "../../../asset/Shawna_1.jpg";
import LeftContainer from "../LeftContainer";
const Team = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className="pageBg"
            style={{ backgroundImage: `url('${theStudioBanner}')` }}
          >
            <h1 className="pageHeader">
              <span>Team</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mb_60 gy-5">
            <div className="col-md-3">
              <LeftContainer active={{ team: "/team" }} />
            </div>

            <div className="col-md-9">
              <div className="mb-5 d-flex flex-column gap-2">
                <h2 className="text-center">
                  <strong>Top Brass </strong>
                </h2>
                <p className="decMaker text-center">The Decision Makers</p>
              </div>
              <article>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-4 align-items-center">
                  <div className="team">
                    <img className="img-fluid" src={mike} alt="Mike Parker" />
                    <div className="brassContent text-center d-flex flex-column gap-2">
                      <h4 className="text-center">Mike Parker</h4>
                      <p className="text-center">Founder, Operations Director</p>
                      <div>
                        <button
                          type="button"
                          className="btn btnxs btn-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#topbrass1"
                        >
                          Read More +
                        </button>
                        <div
                          className="modal fade"
                          id="topbrass1"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalLabel"
                                ></h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">.............</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team">
                    <img className="img-fluid" src={rob} alt="Rob Washington" />

                    <div className="brassContent text-center d-flex flex-column gap-2">
                      <h4 className="text-center">Rob Washington</h4>
                      <p className="text-center">Technology Director</p>
                      <div>
                        <button
                          type="button"
                          className="btn btnxs btn-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#topbrass2"
                        >
                          Read More +
                        </button>
                        <div
                          className="modal fade"
                          id="topbrass2"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalLabel"
                                ></h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">.............</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="half-margins" />

                <div className="row gy-3 mb_60">
                  <div className="mb-5 d-flex flex-column gap-2">
                    <h2 className="text-center">
                      <strong>Internship Bootcamp</strong>
                    </h2>
                    <p className="decMaker text-center">className of Summer 2016</p>
                  </div>

                  <div className="col-12 col-md-3">
                    <div className="team mx-auto">
                      <img className="img-fluid" src={shawna} alt="Shawna Binion" />
                      <div className="brassContent text-center d-flex flex-column gap-2">
                        <h4 className="text-center">Shawna Binion</h4>
                        <p className="text-center">Creative Copywriter</p>
                        <div>
                          <button
                            type="button"
                            className="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot1"
                          >
                            Read More +
                          </button>
                          <div
                            className="modal fade"
                            id="boot1"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">.............</div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="team mx-auto">
                      <img className="img-fluid" src={anna} alt="Anna Safavi" />
                      <div className="brassContent text-center d-flex flex-column gap-2">
                        <h4 className="text-center">Anna Safavi</h4>
                        <p className="text-center">Web Developer</p>
                        <div>
                          <button
                            type="button"
                            className="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot2"
                          >
                            Read More +
                          </button>
                          <div
                            className="modal fade"
                            id="boot2"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">.............</div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-3">
                    <div className="team mx-auto">
                      <img
                        className="img-fluid"
                        src={charia}
                        alt="Charia McDonald"
                      />

                      <div className="brassContent text-center d-flex flex-column gap-2">
                        <h4 className="text-center">Charia McDonald</h4>
                        <p className="text-center">Video Editor</p>
                        <div>
                          <button
                            type="button"
                            className="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot3"
                          >
                            Read More +
                          </button>
                          <div
                            className="modal fade"
                            id="boot3"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">.............</div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-3">
                    <div className="team mx-auto">
                      <img className="img-fluid" src={emily} alt="Emily Resch" />
                      <div className="brassContent text-center d-flex flex-column gap-2">
                        <h4 className="text-center">Emily Resch</h4>
                        <p className="text-center">Graphic Designer</p>
                        <div>
                          <button
                            type="button"
                            className="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot4"
                          >
                            Read More +
                          </button>
                          <div
                            className="modal fade"
                            id="boot4"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">.............</div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- CALLOUT --> */}
                <div className="bgCall">
                  <div className="row gy-3 align-items-center">
                    <div className="col-12 col-md-9">
                      {/* <!-- left text --> */}
                      <h4 className="mb-2">
                        Wanna join 4835<strong>Studios</strong>?
                      </h4>
                      <p>
                        4835<strong>Studios</strong> is always looking for
                        talented people to join our family! Send us a note!
                      </p>
                    </div>
                    {/* <!-- /left text --> */}

                    <div className="col-12 col-md-3">
                      {/* <!-- right btn --> */}
                      <a className="btn btn-dark introBtn" href="/career">
                        Introduce Yourself!
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /CALLOUT --> */}
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
