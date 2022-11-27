import React from "react";
import "../components/Cards.css";
import adhar from "../img/s.jpeg";
import pancard from "../img/q.png";
import cast from "../img/f.png";
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
              <h4 className="text-center">Add new student</h4>

              <button className="btn">Add</button>
            </div>
          </div>
        </div>
        <div className="row-card">
          <div className="card">
            <img src={pancard} alt="Adhaar" />
            <div className="container">
              <h4 className="text-center">Attendance</h4>

              <button className="btn">Open</button>
            </div>
          </div>
        </div>
        <div className="row-card">
          <div className="card">
            <img src={cast} alt="Adhaar" />
            <div className="container">
              <h4 className="text-center">Fees</h4>

              <button className="btn">Open</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
