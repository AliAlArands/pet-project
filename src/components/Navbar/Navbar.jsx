// import Navbar from "react-bootstrap/Navbar";
import "./NavbarStyle.css";
import "bootstrap";
import logo from "./../../assets/navbar/logo.svg";
import user from "./../../assets/navbar/user.svg";
import cart from "./../../assets/navbar/cart.svg";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import createCart from "../../apis/createCart";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  // const navigate = useNavigate();
  let cartId = createCart()
  // const navigateToCart = () => {
  //   cartId = createCart();
  //   navigate(`/carts/${cartId}/`);

  // }
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
        <Link to={`/cart/${cartId}`}>
          <BsCart2 />
        </Link>
        <Link to="/profile">
          <FiUser />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
