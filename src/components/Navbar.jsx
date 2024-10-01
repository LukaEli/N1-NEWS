import React from "react";
import "../styles/navbar.css";

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("responsive");
}

const Navbar = () => {
  return (
    <div className="topnav">
      <div className="nav-links" id="navLinks">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="profile" href="">
          <span className="fas fa-user"></span> Profile
        </a>
      </div>
      <a className="icon" onClick={toggleMenu}>
        <span className="fas fa-bars"></span>
      </a>
    </div>
  );
};

export default Navbar;
