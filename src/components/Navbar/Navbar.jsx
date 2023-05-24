// import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./NavbarStyle.css";
const Navbar = () => {
  return (
    <div className="d-flex justify-content-between  align-items-center px-5 py-2 navbar-color">
      <div className="d-flex justify-content-between align-items-center">
        <FaBars className="me-3"/>
        <div>LOGO</div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <form action="">
          <div className="search-container">
            <input type="text" className="input"/>
            <FaSearch />
          </div>
        </form>
        <FaShoppingCart className="me-4"/>
        <FaUser />
      </div>
    </div>
  );
};

export default Navbar;
