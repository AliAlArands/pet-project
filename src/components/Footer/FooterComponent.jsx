import React from "react";
import './FooterComponent.css';
import Logo from './../../assets/newlogo.svg';
import { Link } from "react-router-dom";
const FooterComponent = () => {
    return (

        <footer>
            <div class="footer-contener">
                <div class="left-side">
                    <img src={Logo} alt="logo-image" />
                </div>
                <div class="center-side">
                    <p class="first-line">Aenean egestas libero amet vulputate.</p>
                    <p class="second-line">© 2022 Bonnie Hong. All Rights Reserved.</p>
                </div>
                <div className="links">
                    <Link className='my-2' to='/home'>FAQ</Link>
                    <Link className='my-2' to='/about'>Feedback</Link>
                    <Link className='my-2' to='/about'>About us</Link>
                </div>
                <div class="right-side">
                <Link className='my-2' to='/https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></Link>
                <Link className='my-2' to='/https://www.linkedin.com/'> <i class="fa-brands fa-linkedin-in"></i></Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;