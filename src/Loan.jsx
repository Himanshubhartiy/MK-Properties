import React from "react";
import { Link } from "react-router-dom";

function Loan() {
  return (
    <>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* <!-- Image Section --> */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/assets/homeloan.jpg" // Change the image if you have a loan-related one
                alt="Home Loan"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* <!-- Text Section --> */}
            <div className="col-md-6 text-center text-md-start">
              <h2 className="mb-3 text-black">Need a Loan?</h2>
              <p className="lead">
                We help you get home loans from any bank with ease. From
                paperwork to approval, we guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loan;
