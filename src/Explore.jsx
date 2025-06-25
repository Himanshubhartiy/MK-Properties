import React from "react";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <>
      <div className="bg-white" id="started__section">
        <div className="pt-5">
          <h5 className="text-center text-black">
            GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
          </h5>
        </div>
        <div className="row justify-content-around pb-5">
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/home.jpg" className="image"></img>
            <p className="text-black">Buying a home</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/rent.png" className="image"></img>
            <p className="text-black">Renting a home</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/prop.jpg" className="image"></img>
            <p className="text-black">Sell/Rent your property</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/plots.jpg" className="image"></img>
            <p className="text-black">Plots/Land</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/pg.jpg" className="image"></img>
            <p className="text-black">PG and co-living</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/com.jpg" className="image"></img>
            <p className="text-black">Buying commercial spaces</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/lease.jpg" className="image"></img>
            <p className="text-black">Lease commercial spaces</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center box">
            <img src="/assets/loan.jpg" className="image"></img>
            <p className="text-black">Property Loan Help</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
