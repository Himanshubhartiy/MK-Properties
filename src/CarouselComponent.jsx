import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CarouselComponent = () => {
  return (
    <div
      className="carousel-container bg-white text-black py-5"
      id="project__section"
    >
      <h4 className="text-center mb-5 mt-5 fw-bold">
        Made with MK-Properties work, real results
      </h4>

      <Carousel indicators={false} controls={true} className="w-75 mx-auto">
        {/* First Slide - Video */}
        <Carousel.Item>
          <video
            className="d-block w-100 carousel-video"
            src="/assets/02.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </Carousel.Item>

        {/* Second Slide - Video with Play Icon Overlay */}
        <Carousel.Item>
          <div className="video-wrapper position-relative">
            <video
              className="d-block w-100 carousel-video"
              src="/assets/02.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </Carousel.Item>

        {/* Third Slide - Video */}
        <Carousel.Item>
          <video
            className="d-block w-100 carousel-video"
            src="/assets/02.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
