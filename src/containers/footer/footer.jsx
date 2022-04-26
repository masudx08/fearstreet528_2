import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer-btn">
                <p><a href='#home'>Return to Top of Page</a></p>
            </div>
            <div className="footer-links">
                <div className="footer-links_logo">
                    <img src={logo} alt="logo" ></img>
                    <p>1100 South Marietta Pkwy SE</p>
                </div>
                <div className="footer-links_div">
                    <h4>Links</h4>
                    <p><a href="#what">Here is What we do!</a></p>
                    <p><a href="#whatWe">What We Treat</a></p>
                    <p><a href="#doctors">Our Doctors</a></p>
                    <p><a href='#blog'>FAQ</a></p>
                    <p><a href='#contactus'>Contact Us</a></p>
                </div>
                <div className="footer-links_div">
                    <h4>Get in touch</h4>
                    <div>1100 South Marietta Pkwy </div>
                    <div>470-353-7879</div>
                    <div>telemedicine4242@gmail.com</div>
                </div>

            </div>
            <div className="social-container">
                <h3>Social Media</h3>
                <a href="https://www.facebook.com/profile.php?id=100079826133795" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/telemedicine42" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <div className="footer-copyright">
                <p>Copyright tag</p>
            </div>
        </div>
    )
};

export default Footer;