import React from "react";
import slide1 from  "../../asset/slide-1.jpg"
import slide2 from  "../../asset/slide-2.jpg"
import slide3 from  "../../asset/slide-3.jpg"
const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src={slide1}
              class="d-block w-100"
              alt="Slider"
            />
            <div class="carousel-caption d-block text-start">
              <h1>Create, Record & Brand Yourself.</h1>
              <div class="d-block">
                <h2>Audio, visual & digital media services in one place.</h2>
              </div>
              <div class="d-block">
                <p>
                  4835<strong>Studios</strong> is a all-encompassing
                  audio/visual/digital design studio located in Chicago
                  providing artists, musicians and production companies one
                  place to create and launch their projects.
                </p>
              </div>
              <div class="d-block">
                <a class=" learnBtn" href="/theStudio">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={slide2}
              class="d-block w-100"
              alt="Slider"
            />
            <div class="carousel-caption d-block text-start">
              <h1>Sonically Driven</h1>
              <div class="d-block">
                <h2>
                  Recording, mixing, and mastering experience that is second to
                  none.
                </h2>
              </div>
              <div class="d-block">
                <p>Let us take your audio project to the level.</p>
              </div>
              <div class="d-block">
                <a class=" learnBtn" href="/audio">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={slide3}
              class="d-block w-100"
              alt="Slider"
            />
            <div class="carousel-caption d-block text-start">
              <h1>Visualization ≡ Visual</h1>
              <div class="d-block">
                <h2>
                  Everything to create stunning visuals for your next project.
                </h2>
              </div>
              <div class="d-block">
                <p>
                  Everything to create stunning visuals for your next project.
                </p>
              </div>
              <div class="d-block">
                <a class=" learnBtn" href="/visual">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
