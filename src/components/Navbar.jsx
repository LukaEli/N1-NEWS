import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("responsive");
}

const Navbar = ({ username, onLogout }) => {
  console.log(username, "<<<<username");

  return (
    <div className="topnav">
      <div className="nav-links" id="navLinks">
        <Link className="active" to="/">
          Home
        </Link>
        <Link>News</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link className="profile" to="/login">
          {username?.avatar_url ? (
            <img
              src={username.avatar_url}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <span className="fas fa-user"></span>
          )}
          Profile
        </Link>
      </div>

      {/* mobile version of profile */}
      <Link className="icon" onClick={toggleMenu} to="/login">
        {username.avatar_url ? (
          <img src={username.avatar_url} alt="profile" />
        ) : (
          <span className="fas fa-bars"></span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
