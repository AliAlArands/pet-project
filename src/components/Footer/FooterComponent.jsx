import React from "react";
import "./FooterComponent.css";
import Logo from "./../../assets/navbar/footer-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="logo" className="logo" />

      <div className="center-side">
        <p className="first-line">Aenean egestas libero amet vulputate.</p>
        <div className="footer-icons">
          <Link className="footer-icon" to="#">
            <FaInstagram />
          </Link>
          <Link className="footer-icon" to="#">
            <FaLinkedinIn />
          </Link>
        </div>
        <p className="second-line">© 2022 Bonnie Hong. All Rights Reserved.</p>
      </div>
      <div className="footer-pages-links">
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        <NavLink to="/about">About us</NavLink>
      </div>
    </footer>
  );
};
export default FooterComponent;
