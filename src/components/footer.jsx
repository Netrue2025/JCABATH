import "../styles/components/footer.css"
import logo from "../media/images/logo.png"
import { Link } from "react-router-dom"
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export function Footer(){
    return(
        <div className="footer-container">
            
           
            <div className="footer-inset-container">
                {/* Details main container */}
                <div className="details-container">
                    {/* first container */}
                    <div className="footer-contacts">
                        <div className="logo-name">
                            <div className="logo">
                                <img src={logo} alt="Church Logo image" />
                                <h1>JESUS CHRIST ASSEMBLY BATH</h1>
                            </div>
                            <div className="logo-details">
                                <p>RCCG JCA is dedicated to discipleship, capacity building, and global impact. </p>
                            </div>
                        </div>

                        <div className="email-phone">
                            <div className="email"><HiOutlineMailOpen className="email-icon"/><p>info@jcabath.co.uk</p></div>
                            <div className="phone"><MdPhoneInTalk className="phone-icon"/><p>+443 704 878 2063</p></div>

                        </div>
                    </div>

                    {/* second container */}
                    <div className="quick">
                        <h2>Quick Links</h2>
                        <div className="quicklinks">
                            <Link to={"/"}><span>Homepage</span></Link>
                            <Link to={"/jca-good-women"}><span>Ministries</span></Link>
                            <Link to={"/contact-us"}><span>Connect</span></Link>
                            <Link to={"/messages"}><span>Media</span></Link>
                            <Link to={"/amazing-grace"}><span>Events</span></Link>
                        </div>
                    </div>

                    {/* third container */}
                    <div className="church">
                        <h2>Church</h2>
                        <div className="church-about">
                            <Link to={"/about-us"}><span>About Us</span></Link>
                            <Link to={"/about-jca"}><span>Contact us</span></Link>
                            <Link to={"/giving"}><span>Give</span></Link>
                        </div>
                    </div>

                    {/* Fourth container */}
                    <div className="social-media">
                        <h2>Connect with us</h2>
                        <div className="icons">
                            <Link to="https://www.tiktok.com/@rccg_jcabath?_r=1&_t=ZN-91I3CnaSGSw"><FaTiktok className="tiktok"/></Link>
                            <Link to='https://www.instagram.com/rccgjcabath?igsh=MTNjYXF2cGUxcDd1eg=='><FaInstagram className="instagram"/></Link>
                            <Link to="https://youtube.com/@rccgbath?si=KLDW3IZU7TMjKMHq"><FaYoutube className="youtube"/></Link>
                            <Link to="https://whatsapp.com"><FaWhatsapp className="whatsapp"/></Link>
                        </div>

                    </div>
            
                </div>

                {/* others */}
                <div className="others">
                    <div className="others-details">
                        <div className="terms-privacy-cookies">
                            <Link className="link"><span>Terms of service</span></Link>
                            <Link className="link"><span>Privacy policy</span></Link>
                            <Link className="link"><span>Cookies Policy</span></Link>
                            <Link className="link" to={"https://netrue.io"}><span>Developed by Netrue Ltd</span></Link>
                        </div>
                        <p>All rights reserved  2025  </p>
                    </div>


                </div>
            </div>
           
          
     
          
        </div>
    )
}