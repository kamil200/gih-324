import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import "../components/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <HomeIcon style={{ color: "#0000ff", marginLeft: 100 }}></HomeIcon>
      <h7> Student Info</h7>
      <h7> Result </h7>
      <h7> Attendance </h7>
      <h7> Fees </h7>
      <SearchIcon style={{ color: "#0000ff", marginRight: 100 }}></SearchIcon>
    </div>
  );
}

export default Navbar;
