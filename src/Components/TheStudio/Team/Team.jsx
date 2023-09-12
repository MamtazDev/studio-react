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
        <div class="container">
          <div
            class="pageBg"
            style={{ backgroundImage: `url('${theStudioBanner}')` }}
          >
            <h1 class="pageHeader">
              <span>Team</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row mb_60 gy-5">
            <div class="col-md-3">
              <LeftContainer />
            </div>

            <div class="col-md-9">
              <div class="mb-5 d-flex flex-column gap-2">
                <h2 class="text-center">
                  <strong>Top Brass </strong>
                </h2>
                <p class="decMaker text-center">The Decision Makers</p>
              </div>
              <article>
                <div class="d-flex flex-column flex-md-row justify-content-center gap-4 align-items-center">
                  <div class="team">
                    <img class="img-fluid" src={mike} alt="Mike Parker" />
                    <div class="brassContent text-center d-flex flex-column gap-2">
                      <h4 class="text-center">Mike Parker</h4>
                      <p class="text-center">Founder, Operations Director</p>
                      <div>
                        <button
                          type="button"
                          class="btn btnxs btn-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#topbrass1"
                        >
                          Read More +
                        </button>
                        <div
                          class="modal fade"
                          id="topbrass1"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                ></h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">.............</div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
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

                  <div class="team">
                    <img class="img-fluid" src={rob} alt="Rob Washington" />

                    <div class="brassContent text-center d-flex flex-column gap-2">
                      <h4 class="text-center">Rob Washington</h4>
                      <p class="text-center">Technology Director</p>
                      <div>
                        <button
                          type="button"
                          class="btn btnxs btn-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#topbrass2"
                        >
                          Read More +
                        </button>
                        <div
                          class="modal fade"
                          id="topbrass2"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                ></h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">.............</div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
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

                <hr class="half-margins" />

                <div class="row gy-3 mb_60">
                  <div class="mb-5 d-flex flex-column gap-2">
                    <h2 class="text-center">
                      <strong>Internship Bootcamp</strong>
                    </h2>
                    <p class="decMaker text-center">Class of Summer 2016</p>
                  </div>

                  <div class="col-12 col-md-3">
                    <div class="team mx-auto">
                      <img class="img-fluid" src={shawna} alt="Shawna Binion" />
                      <div class="brassContent text-center d-flex flex-column gap-2">
                        <h4 class="text-center">Shawna Binion</h4>
                        <p class="text-center">Creative Copywriter</p>
                        <div>
                          <button
                            type="button"
                            class="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot1"
                          >
                            Read More +
                          </button>
                          <div
                            class="modal fade"
                            id="boot1"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">.............</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
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
                  <div class="col-12 col-md-3">
                    <div class="team mx-auto">
                      <img class="img-fluid" src={anna} alt="Anna Safavi" />
                      <div class="brassContent text-center d-flex flex-column gap-2">
                        <h4 class="text-center">Anna Safavi</h4>
                        <p class="text-center">Web Developer</p>
                        <div>
                          <button
                            type="button"
                            class="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot2"
                          >
                            Read More +
                          </button>
                          <div
                            class="modal fade"
                            id="boot2"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">.............</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
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

                  <div class="col-12 col-md-3">
                    <div class="team mx-auto">
                      <img
                        class="img-fluid"
                        src={charia}
                        alt="Charia McDonald"
                      />

                      <div class="brassContent text-center d-flex flex-column gap-2">
                        <h4 class="text-center">Charia McDonald</h4>
                        <p class="text-center">Video Editor</p>
                        <div>
                          <button
                            type="button"
                            class="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot3"
                          >
                            Read More +
                          </button>
                          <div
                            class="modal fade"
                            id="boot3"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">.............</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
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

                  <div class="col-12 col-md-3">
                    <div class="team mx-auto">
                      <img class="img-fluid" src={emily} alt="Emily Resch" />
                      <div class="brassContent text-center d-flex flex-column gap-2">
                        <h4 class="text-center">Emily Resch</h4>
                        <p class="text-center">Graphic Designer</p>
                        <div>
                          <button
                            type="button"
                            class="btn btnxs btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#boot4"
                          >
                            Read More +
                          </button>
                          <div
                            class="modal fade"
                            id="boot4"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  ></h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">.............</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
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
                <div class="bgCall">
                  <div class="row gy-3 align-items-center">
                    <div class="col-12 col-md-9">
                      {/* <!-- left text --> */}
                      <h4 class="mb-2">
                        Wanna join 4835<strong>Studios</strong>?
                      </h4>
                      <p>
                        4835<strong>Studios</strong> is always looking for
                        talented people to join our family! Send us a note!
                      </p>
                    </div>
                    {/* <!-- /left text --> */}

                    <div class="col-12 col-md-3">
                      {/* <!-- right btn --> */}
                      <a class="btn btn-dark introBtn" href="career.html">
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
