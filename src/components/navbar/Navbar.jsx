import React, { useState } from "react";

import "./navbar.css";
// import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/" className="title">
        <img src={Logo} alt="logo" className="logoImg" />
        <h4>LessonUp</h4>
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/ourteam">OUR-TEAM</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar