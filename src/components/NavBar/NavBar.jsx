import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="p-6 navbar">
      <div className="logo">IIIT KOTTAYAM</div>
      <div className="nav-links"> 
        <a href="/" className="nav-link">
          HOME
        </a>
        <a href="/about" className="nav-link">
          ABOUT
        </a>
        <a href="/events" className="nav-link">
          EVENTS
        </a>
        <a href="/admin" className="nav-link">
          ADMIN
        </a>
      </div>
        <a href="/login" className="px-5 py-2 login-btn">
          <div className="bg-transparent login-content">
            <span className="bg-transparent ">LOGIN</span>
            <img src='/assets/arrow_forward_ios.png' alt="Arrow icon" className="bg-transparent " />
          </div>
        </a>
    </nav>
  );
};

export default NavBar;