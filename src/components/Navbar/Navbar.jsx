// import Navbar from "react-bootstrap/Navbar";
import "./NavbarStyle.css";
import "bootstrap";
import logo from "./../../assets/navbar/logo.svg";
import { BsCart3, BsPerson, BsPersonFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
// import createCart from "../../apis/cartApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createCart } from "../../apis/cartApi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  let cartId = localStorage.getItem("cartId");
  const handleCartClick = async () => {
    if (!cartId) {
      try {
        cartId = await createCart(); // Call the function to create a cart
        localStorage.setItem("cartId", cartId);
      } catch (error) {
        console.error("Error creating cart:", error);
        return;
      }
    }
    console.log(cartId);
    cartId = "2";
    console.log(cartId);
    const cartUrl = `/carts/${cartId}`;
    navigate(cartUrl); // Programmatically navigate to the cart URL
  };
  return (
    <div className="d-flex justify-content-between align-items-center pet-store-navbar">
      <div className="">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>

      <form action="" className="search-container">
        <input
          type="text"
          className="search-nav-input"
          placeholder="Search for product"
        />
        <button>Search</button>
      </form>

      <div className="icons">
        {/* <img src={cart} alt="" />
        <img src={user} alt="" /> */}

        {/* <BsCart2 onClick={handleCartClick} className="navbar-icon" /> */}
        <NavLink to={`/cart/${cartId}`}>
          {({ isActive }) => (isActive ? <FaShoppingCart /> : <BsCart3 />)}
        </NavLink>
        <NavLink to="/profile">
          {({ isActive }) =>
            isActive ? <BsPersonFill /> : <BsPerson className="navbar-icon" />
          }
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
