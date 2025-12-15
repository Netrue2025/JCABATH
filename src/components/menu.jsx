import { FaChevronDown } from "react-icons/fa";
import "../styles/components/menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export function Menu(props){
    const [about, setAbout] = useState("about-dropdown-hide")
    const [ministry, setMinistry] = useState("ministry-dropdown-hide")
    const [connect, setConnect] = useState("connect-dropdown-hide")
    const [media, setMedia] = useState("media-dropdown-hide")
    const [evts, setEvts] = useState("evts-dropdown-hide")
    return(
        <div className="menu-container" id={props.id}>
            <div className="inset-container">
                <div className="inner-one">
                    <Link to="/" className="link">
                        <div className="menu-btn">
                            <h2>Home</h2>
                        </div>
                    </Link>
                    {/* About */}
                    <div>
                        <div className="menu-btn" onClick={() => {
                            about === "about-dropdown-hide"?
                            setAbout("about-dropdown-show"): 
                            setAbout("about-dropdown-hide")
                            }}>
                            <h2>About</h2>
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div className={about}>
                            <Link to="/about-us" className="link"><h2>About RCCG</h2></Link>
                            <Link to="/about-jca" className="link"><h2>About RCCG JCA</h2></Link>
                            <Link to="/leadership" className="link"><h2>Leadership</h2></Link>
                        </div>
                    </div>
                    {/* Ministry */}
                    <div>
                        <div className="menu-btn" onClick={() => {
                            ministry === "ministry-dropdown-hide"?
                            setMinistry("ministry-dropdown-show"): 
                            setMinistry("ministry-dropdown-hide")
                            }}>
                            <h2>Ministries</h2>
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div className={ministry}>
                            <Link to="/amazing-grace" className="link"><h2>Amazing Grace</h2></Link>
                            <Link to="/jca-good-women" className="link"><h2>JCA Good Women</h2></Link>
                            <Link to="/raising-giant" className="link"><h2>Raising Giants</h2></Link>
                            <Link to="/children-department" className="link"><h2>Children's Department</h2></Link>
                        </div>
                    </div>
 

                    {/* Connect */}
                    <div>
                        <div className="menu-btn" onClick={() => {
                            connect === "connect-dropdown-hide"?
                            setConnect("connect-dropdown-show"): 
                            setConnect("connect-dropdown-hide")
                            }}>
                            <h2>Connect</h2>
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div className={connect}>
                            <Link to="/services" className="link"><h2>Services</h2></Link>
                            <Link to="/prayer-request" className="link"><h2>Prayer Request</h2></Link>
                            <Link to="/contact-us" className="link"><h2>Contact Us</h2></Link>
                            
                        </div>
                    </div>

                    {/* Media */}
                    <div>
                        <div className="menu-btn" onClick={() => {
                            media === "media-dropdown-hide"?
                            setMedia("media-dropdown-show"): 
                            setMedia("media-dropdown-hide")
                            }}>
                            <h2>Media</h2>
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div className={media}>
                            <Link to="/messages" className="link"><h2>Messages</h2></Link>
                            <Link to="/testimonies" className="link"><h2>Testimonials</h2></Link>
                        </div>
                    </div>
   
                    {/* Events */}
                    <div>
                        <div className="menu-btn" onClick={() => {
                            evts === "evts-dropdown-hide"?
                            setEvts("evts-dropdown-show"): 
                            setEvts("evts-dropdown-hide")
                            }}>
                            <h2>Events</h2>
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div className={evts}>
                            <Link className="link"><h2>Programes</h2></Link>
                            <Link className="link"><h2>Achives</h2></Link>
                        </div>
                    </div>
        

                    <Link to="/giving" className="link">
                        <div className="menu-btn">
                            <h2>Give</h2>
                        </div>
                    </Link>   

                </div>
            </div>
            <Link to="/contact-us" className="link">
               
                <button><p>Contact Us</p></button>
           
           </Link>
            
        </div>

    )
}