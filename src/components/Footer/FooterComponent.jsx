import React from "react";
import './FooterComponent.css';
import Logo from './../../assets/Logo.svg';
const FooterComponent = () => {
    return (
        
        <footer>
            <div class="footer-contener">
                <div class="left-side">
                    <img src={Logo} alt="logo-image"/>
                </div>
                <div class="center-side">
                    <p class="first-line">Aenean egestas libero amet vulputate.</p>
                    <p class="second-line">© 2022 Bonnie Hong. All Rights Reserved.</p>
                </div>
                <div class="right-side">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </footer>
    );
}
export default Footer;