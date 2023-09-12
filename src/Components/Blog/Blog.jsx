import React from "react";

const Blog = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div className="blogHeader mb-4">
              <h1>
                The <strong>Blog</strong>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb_60">
            <form
              action=""
              className=" d-flex justify-content-between align-items-center blogForm"
            >
              <input
                type="text"
                className="form-control w-100 d-inline"
                placeholder="Search our blog"
              />
              <button type="submit" className="btn btn-dark d-inline" value="">
                SEARCH
              </button>
            </form>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="blogInner">
              <div className="mb-4">
                <h2 className="mb-2">
                  <a href="#">Technology and the Audio Engineer: Part I</a>
                </h2>

                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i> audio production
                </a>
                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i> audio engineering
                </a>
                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i> audio technology
                </a>

                <span className="label">12/29/2015</span>
              </div>
              {/* <!-- blog short preview --> */}
              <p>
                Audio engineering is an art form that is typically appreciated
                only by audiophiles and those who engineer or produce music for
                a living. Behind every engineer is the technology that helped
                create the sounds we hear. Ask the average person to name a
                recording engineer and they will most likely have no reply. Ask
                them to name any of the equipment used to make a recording and
                they will be equally dumbfounded. Although the names may not be
                known by those outside the music industry, the impact they have
                had on music production throughout the decades is immeasurable.
              </p>
              {/* <!-- read more button --> */}
              <div className="mt-5 readBtn">
                <a href="#" className="btn btn-xs">
                  <i className="fa fa-sign-out"></i> READ MORE
                </a>
              </div>
            </div>

            <div className="blogInner">
              <div className="mb-4">
                <h2 className="mb-2">
                  <a href="#">
                    Chicago rapper King Louie recovering after being shot in the
                    head
                  </a>
                </h2>

                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i>CHICAGO
                </a>
                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i>HIP-HOP
                </a>
                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i>GUN
                </a>
                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i>VIOLENCE
                </a>

                <span className="label">12/29/2015</span>
              </div>

              {/* <!-- blog short preview --> */}
              <p>
                King Louie, the Chicago rapper credited with coining the
                controversial nickname “Chiraq” in response to the city’s
                widespread gun violence, is “alive and recovering” after police
                say he was shot in the head on Wednesday in the city’s Ashburn
                neighborhood.
              </p>

              {/* <!-- read more button --> */}
              <div className="mt-5 readBtn">
                <a href="#" className="btn btn-xs">
                  <i className="fa fa-sign-out"></i> READ MORE
                </a>
              </div>
            </div>

            <div className="blogInner">
              <div className="mb-4">
                <h2 className="mb-2">
                  <a href="#">4835 Studio website is now live!</a>
                </h2>

                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i>STUDIO
                </a>
                <a href="#" className="label">
                  <i className="fa fa-dot-circle-o"></i> NEW SITE LAUNCH CHICAGO
                </a>
                <span className="label">12/29/2015</span>
              </div>

              {/* <!-- blog short preview --> */}
              <p>
                It took some time for the heart to come but it's here, and
                everybody's in fear! Sorry for biting KRS-One, but that's how we
                feel now. Our beautiful website is up for all to see. As with
                all websites, ours is work-in-progress and will be
                ever-evolving. But now everyone is able to explore our offerings
                within the audio and visual space.
              </p>

              {/* <!-- read more button --> */}
              <div className="mt-5 readBtn">
                <a href="#" className="btn btn-xs">
                  <i className="fa fa-sign-out"></i> READ MORE
                </a>
              </div>
            </div>

            {/* <!-- PAGINATION --> */}
            <div className="d-flex justify-content-center mb_60">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- /PAGINATION --> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
