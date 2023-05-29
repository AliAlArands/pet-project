// import Navbar from "react-bootstrap/Navbar";
import "./NavbarStyle.css";
import "bootstrap";
import logo from "./../../assets/navbar/logo.svg";
import user from "./../../assets/navbar/user.svg";
import cart from "./../../assets/navbar/cart.svg";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center pet-store-navbar">
      <div className="">
        <img src={logo} alt="" className="logo" />
      </div>

      <form action="" className="search-container">
        <input type="text" className="search-nav-input" placeholder="Search for product"/>
        <button>Search</button>
      </form>

      <div className="icons">
        {/* <img src={cart} alt="" />
        <img src={user} alt="" /> */}
        <BsCart2/>
        <FiUser />
        
      </div>
    </div>
  );
};

export default Navbar;
