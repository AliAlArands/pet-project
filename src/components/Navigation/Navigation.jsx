import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="tabs">
        <span>
          <NavLink to="/" className="navigation-link">
            Home
          </NavLink>
        </span>
        <span>
          <NavLink to="/findmypet" className="navigation-link">
            Find my pet
          </NavLink>
        </span>
        <span>
          <NavLink to="/support" className="navigation-link">
            Support
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
