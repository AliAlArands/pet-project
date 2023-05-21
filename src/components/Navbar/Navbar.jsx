
import './NavbarStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch}  from 'react-icons/fa'
import {FaShoppingCart}  from 'react-icons/fa'
import {FaUser}  from 'react-icons/fa'
function Navbar(){
    return(
        <nav className="navbar nav-bgcolor fixed-top">
        <div className="container-fluid container ">
        <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler nav-icon " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">Link</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='Icone-bar'>
            < FaSearch/>
           < FaShoppingCart/>
          <FaUser/>
          </div>
        </div>
      </nav> 
    )
}



export default Navbar;