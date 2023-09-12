import React from "react";

const Contact = () => {
  return (
    <div>
      <main>
        <section>
          <div class="container">
            <div class="contact mb-3">
              <h1>
                <strong>Contact</strong> Us
              </h1>
              <div class="grayLine"></div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="mapContact mb_60">
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
          <div class="container mb_60">
            <div class="row gy-5">
              <div class="col-12 col-md-8">
                <form class="contactForm">
                  <div class="mb-3">
                    <label class="form-label">Subject*</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="d-flex flex-column flex-md-row justify-content-center gap-2 align-items-center">
                    <div class="mb-3 w-100">
                      <label class="form-label">Full Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="mb-3 w-100">
                      <label class="form-label">Email *</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Messages *
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-dark btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
              <div class="col-md-4">
                <div class="address">
                  <h3 class="mb-4">
                    <strong>Visit</strong> Us
                  </h3>

                  <p>
                    Drop us a line or stop by anytime. We are ready and waiting
                    to assist you with all of your audio and visual needs.
                  </p>

                  <div class="divider half-margins">
                    {/* <!-- divider 30px --> */}
                  </div>

                  <div class="d-flex flex-column gap-2 align-items-start">
                    <p class="d-flex align-items-center justify-content-center gap-2">
                      <strong>
                        <i class="fa fa-map-marker"></i>
                      </strong>{" "}
                      4835 N Elston Ave. S100 Chicago IL 60630
                    </p>
                    <p class="d-flex align-items-center justify-content-center gap-2">
                      <strong>
                        <i class="fa fa-phone"></i>
                      </strong>{" "}
                      (773) 853-0424
                    </p>
                    <p class=" mb-2 d-flex align-items-center justify-content-center gap-2">
                      <strong>
                        <i class="fa fa-envelope"></i>
                      </strong>
                      <a class="text-danger" href="contact.html">
                        info@4835studios.com
                      </a>
                    </p>
                    <p>
                      <strong>After-Hours Text: </strong> (312) 614-2143
                    </p>
                  </div>

                  <div class="divider half-margins">
                    {/* <!-- divider 30px --> */}
                  </div>

                  <h4 class="mb-4">Business Hours</h4>
                  <p>
                    <strong>Monday - Friday:</strong> 10am to 12am
                  </p>
                  <p class="block">
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
