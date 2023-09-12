import React from "react";

const Contact = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div className="contact mb-3">
              <h1>
                <strong>Contact</strong> Us
              </h1>
              <div className="grayLine"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="mapContact mb_60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.4607275819217!2d-87.74582580988672!3d41.96891688555695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc2dc8d217ad%3A0xc0eff0cc0ec50d88!2s4835%20N%20Elston%20Ave%2C%20Chicago%2C%20IL%2060630%2C%20USA!5e0!3m2!1sen!2sbd!4v1693828223621!5m2!1sen!2sbd"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section>
          <div className="container mb_60">
            <div className="row gy-5">
              <div className="col-12 col-md-8">
                <form className="contactForm">
                  <div className="mb-3">
                    <label className="form-label">Subject*</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-center gap-2 align-items-center">
                    <div className="mb-3 w-100">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">
                      Messages *
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="col-md-4">
                <div className="address">
                  <h3 className="mb-4">
                    <strong>Visit</strong> Us
                  </h3>

                  <p>
                    Drop us a line or stop by anytime. We are ready and waiting
                    to assist you with all of your audio and visual needs.
                  </p>

                  <div className="divider half-margins">
                    {/* <!-- divider 30px --> */}
                  </div>

                  <div className="d-flex flex-column gap-2 align-items-start">
                    <p className="d-flex align-items-center justify-content-center gap-2">
                      <strong>
                        <i className="fa fa-map-marker"></i>
                      </strong>{" "}
                      4835 N Elston Ave. S100 Chicago IL 60630
                    </p>
                    <p className="d-flex align-items-center justify-content-center gap-2">
                      <strong>
                        <i className="fa fa-phone"></i>
                      </strong>{" "}
                      (773) 853-0424
                    </p>
                    <p className=" mb-2 d-flex align-items-center justify-content-center gap-2">
                      <strong>
                        <i className="fa fa-envelope"></i>
                      </strong>
                      <a className="text-danger" href="contact.html">
                        info@4835studios.com
                      </a>
                    </p>
                    <p>
                      <strong>After-Hours Text: </strong> (312) 614-2143
                    </p>
                  </div>

                  <div className="divider half-margins">
                    {/* <!-- divider 30px --> */}
                  </div>

                  <h4 className="mb-4">Business Hours</h4>
                  <p>
                    <strong>Monday - Friday:</strong> 10am to 12am
                  </p>
                  <p className="block">
                    <strong>Saturday &amp; Sunday:</strong> 10am to 2am
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

export default Contact;
