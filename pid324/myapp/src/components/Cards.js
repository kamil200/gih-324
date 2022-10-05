import React from "react";
import "../components/Cards.css";
import adhar from "../img/WhatsApp Image 2022-09-20 at 11.38.22 PM (1).jpeg";
import pancard from "../img/WhatsApp Image 2022-09-20 at 11.48.09 PM.jpeg";
import cast from "../img/CASTE (1).png";
function Cards() {
  return (
    <div>
      <div className="card--cont">
        <div className="card--title">
          <span className="text-center">OUR SERVICES</span>
        </div>
      </div>
      <div className="main">
        <div className="row-card">
          <div className="card">
            <img src={adhar} alt="Adhaar" />
            <div className="container">
              <h4 className="text-center">Aadhaar Card</h4>
              <p className="text-center">
                Get All Your Aadhar Changes At One Place Book Your Appointment
                Now.
              </p>
              <button className="btn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="row-card">
          <div className="card">
            <img src={pancard} alt="Adhaar" />
            <div className="container">
              <h4 className="text-center">Pan Card</h4>
              <p className="text-center">
                Get All Your Pan Changes or Create Pan Card. At One Place Book
                Your Appointment Now
              </p>
              <button className="btn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="row-card">
          <div className="card">
            <img src={cast} alt="Adhaar" />
            <div className="container">
              <h4 className="text-center">Caste Certificate</h4>
              <p className="text-center">
                Get Your Caste Certificate. At One Place Book Your Appointment
                Now
              </p>
              <button className="btn">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
