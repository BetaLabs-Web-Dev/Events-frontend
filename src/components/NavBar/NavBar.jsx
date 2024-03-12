import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="fixed w-[100vw] z-50 py-5 px-6 flex flex-row justify-between items-center bg-[#0e002c]">
      <div className="logo">EVENTS</div>
      <div className="hidden md:flex flex-row items-center">
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABOUT
          </NavLink>
          <NavLink to="/events" className="nav-link">
            EVENTS
          </NavLink>
          <NavLink to="/team" className="nav-link">
            TEAM
          </NavLink>
          <NavLink to="/admin" className="nav-link">
            CONTACT US
          </NavLink>
        </div>
      </div>
      <Link href="/login" className="px-7 py-2 rounded-md font-semibold login-btn">
        <div className="bg-transparent">
          <span className="bg-transparent">LOGIN</span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;