import React from "react";
import slide1 from  "../../asset/slide-1.jpg"
import slide2 from  "../../asset/slide-2.jpg"
import slide3 from  "../../asset/slide-3.jpg"
const Banner = () => {
  // lskdfkl;dsh
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={slide1}
              className="d-block w-100"
              alt="Slider"
            />
            <div className="carousel-caption d-block text-start">
              <h1>Create, Record & Brand Yourself.</h1>
              <div className="d-block">
                <h2>Audio, visual & digital media services in one place.</h2>
              </div>
              <div className="d-block">
                <p>
                  4835<strong>Studios</strong> is a all-encompassing
                  audio/visual/digital design studio located in Chicago
                  providing artists, musicians and production companies one
                  place to create and launch their projects.
                </p>
              </div>
              <div className="d-block">
                <a className=" learnBtn" href="/theStudio">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={slide2}
              className="d-block w-100"
              alt="Slider"
            />
            <div className="carousel-caption d-block text-start">
              <h1>Sonically Driven</h1>
              <div className="d-block">
                <h2>
                  Recording, mixing, and mastering experience that is second to
                  none.
                </h2>
              </div>
              <div className="d-block">
                <p>Let us take your audio project to the level.</p>
              </div>
              <div className="d-block">
                <a className=" learnBtn" href="/audio">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="d-block w-100"
              alt="Slider"
            />
            <div className="carousel-caption d-block text-start">
              <h1>Visualization ≡ Visual</h1>
              <div className="d-block">
                <h2>
                  Everything to create stunning visuals for your next project.
                </h2>
              </div>
              <div className="d-block">
                <p>
                  Everything to create stunning visuals for your next project.
                </p>
              </div>
              <div className="d-block">
                <a className=" learnBtn" href="/visual">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
