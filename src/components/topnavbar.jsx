import { Link } from "react-router-dom";
import logo from "../media/images/logo.png"
import { FaChevronDown } from "react-icons/fa";
import 'primeicons/primeicons.css';
import { Aboutdropdown } from "./aboutdropdown";
import { Ministriesdropdown } from "./ministriesdropdown";
import { Connectdropdown } from "../components/connectdropdown"
import { Mediadropdown } from "../components/mediadropdown"
  import { Eventdropdown } from "../components/eventdropdown"  
//imported Style sheet
import "../styles/components/topnavbar.css"
import "../styles/components/aboutdropdown.css"


import { useState } from "react";

export function Topnavbar(props){
    const [drop, setDrop] = useState(false)
      const [ministry, setMinistry] = useState(false)
        const [connect, setConnect] = useState(false)
        const [events, setEvents] = useState(false)
        const [media, setMedia] = useState(false)


    return(
        <>
            <section className="nav-container" >
               
                <div className="inner-container">
                    <figure>
                        <div className="log"><img src={logo} alt="Logo" /></div>
                        <div className="logo-name"><h2>JESUS CHRIST</h2> <h1>ASSEMBLY, BATH</h1></div>
                    </figure>

                    <aside className="nav-menu mobile-nav">
                        <div><Link to={"../"}><input type="button" value="Home" /></Link></div>

                        {/* About menu */}
                        <div className="about"  onClick={() =>
                           drop === false ? setDrop(true) & setMinistry(false) & setConnect(false) & setEvents(false) & setMedia(false):
                            setDrop(false)}>
                            <input type="button" value="About" />
                            <FaChevronDown className="arrow"/>
   
                            {(drop === true)?
                                <Aboutdropdown rccg={"/about-us"} jca={"/about-jca"} leadership={"/leadership"}/>:
                                <Aboutdropdown id="abouthide"/>
                            } 
                        </div>

                        {/* Ministry dropdown */}
                        <div onClick={() => ministry === false ? setMinistry(true) & setDrop(false) & setConnect(false) & setEvents(false) & setMedia(false): setMinistry(false)}>
                            <input type="button" value="Ministries" />
                            <FaChevronDown className="arrow"/>

                            {ministry === true ?
                                <Ministriesdropdown rccg={"/about-us"} jca={"/about-jca"} leadership={"/leadership"}/>:
                                <Ministriesdropdown id="ministryhide"/>
                            } 
                        </div>

                        {/* Connect Dropdown */}
                        <div onClick={() =>
                            connect === false?
                            setConnect(true) & setMinistry(false) & setDrop(false) & setEvents(false) & setMedia(false):
                            setConnect(false)
                        }>
                            <input type="button" value="Connect" />
                            <FaChevronDown className="arrow"/>
                            {
                                connect === true?
                                <Connectdropdown />:
                                <Connectdropdown id ="hideconnect" />
                            }
                        </div>

                        {/* Media Dropdown */}
                        <div onClick={() =>
                            media === false?
                            setMedia(true) & setConnect(false) & setDrop(false) & setMinistry(false) & setEvents(false):
                            setMedia(false)
                        } >
                            <input type="button" value="Media" />
                            <FaChevronDown className="arrow"/>

                            {
                                media === true?
                                <Mediadropdown />:
                                <Mediadropdown id="hidemedia" />
                            }
                        </div>

                        {/* Eevent Dropdown */}
                        <div onClick={() => 
                            events === false?
                            setEvents(true) & setDrop(false) & setMinistry(false) & setConnect(false) & setMedia(false):
                            setEvents(false)
                        }>
                            <input type="button" value="Events" />
                            <FaChevronDown className="arrow"/>

                            {
                                events === true?
                                <Eventdropdown />:
                                <Eventdropdown id="hideevent" />
                            }
                        </div>
                        <div><Link to={"/giving"}><input type="button" value="Give"/></Link></div>
                    </aside>
                    
                    <i className="pi pi-align-justify"></i>
                </div>

            </section>
        </>
    )

}