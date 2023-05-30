import React from "react";
import "./FooterComponent.css";
import Logo from "./../../assets/navbar/footer-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="logo" className="logo" />

      <div class="center-side">
        <p class="first-line">Aenean egestas libero amet vulputate.</p>
        <p class="second-line">© 2022 Bonnie Hong. All Rights Reserved.</p>
      </div>
      <div className="footer-pages-links">
        <NavLink to="/home">FAQ</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        <NavLink to="/about">About us</NavLink>
      </div>
      <div class="right-side">
        <Link className="footer-icons" to="#">
          <FaInstagram />
        </Link>
        <Link className="footer-icons" to="#">
          <FaLinkedinIn />
        </Link>
      </div>
    </footer>
  );
};
export default FooterComponent;
