import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <nav className="nav-bar">
            <a href="/home">Home</a>
            <a href="/menu">Menu</a>
            <a href="/about">About</a>
            <a href="/contact">Contact us</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
