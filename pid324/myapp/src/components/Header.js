import React from "react";
import "./Header.css";
import logo from "../img/download.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo img" className="header--img" />
      <h2 className="header--title">School Mangegment System</h2>
      <select className="header--lang" id="lang">
        <option value="English">English</option>
        <option value="Hindi"> हिंदी (Hindi)</option>
        <option value="Gujrati"> ગુજરાતી (Gujarati)</option>
      </select>
      <button className="header--sign--in"> SIGN IN</button>
      <h4 className="header--sepretor"> | </h4>
      <button className="header--sign--up"> SIGN UP</button>
    </header>
  );
}
