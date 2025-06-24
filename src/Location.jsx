import React from "react";

function Location() {
  return (
    <div className="container">
      <h4 className="text-center mt-5">Location</h4>
      <div className="row mt-5 mb-5 justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
          <img
            src="/assets/chandigarh.jpg"
            height="200"
            width="200"
            className="rounded-circle  shadow-lg"
            alt="Chandigarh"
          />
          <p className="mt-3">Chandigarh</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
          <img
            src="/assets/Panchkula.jpg"
            height="200"
            width="200"
            className="rounded-circle  shadow-lg"
            alt="Panchkula"
          />
          <p className="mt-3">Panchkula</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4 ">
          <img
            src="/assets/Mohali.jpg"
            height="200"
            width="200"
            className="rounded-circle  shadow-lg"
            alt="Mohali"
          />
          <p className="mt-3 ">Mohali</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
          <img
            src="/assets/Zirakpur.jpg"
            height="200"
            width="200"
            className="rounded-circle  shadow-lg"
            alt="Zirakpur"
          />
          <p className="mt-3">Zirakpur</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
