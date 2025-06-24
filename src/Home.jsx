import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="row bg-white">
        <div className="col-md-6 text-center text-md-start px-4 align-content-center">
          <h1 className="fw-bold mb-3">Find Your Dream Home</h1>
          <p className="mb-4">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
          <a href="#started__section" className="btn btn-dark btn-lg rounded-4">
            Explore
          </a>
        </div>

        <div className="col-md-6 text-center px-4 mt-4 mt-md-0">
          <img
            src="/assets/banner.png"
            alt="banner"
            className="img-fluid logo"
          />
        </div>
      </div>

      <div class="container py-5 " id="about__section">
        <div class="row align-items-center">
          {/* <!-- Image Section --> */}
          <div class="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/house.png"
              alt="Dream Home"
              class="img-fluid rounded shadow"
            ></img>
          </div>

          {/* <!-- Text Section --> */}
          <div class="col-md-6 text-center text-md-start">
            <h2 class="mb-3">We Help You To Find Your Dream Home</h2>
            <p class="lead">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
