import { Link } from "react-router-dom";
import logo from "../media/images/logo.png"
import { FaChevronDown } from "react-icons/fa";
import 'primeicons/primeicons.css';
import { Aboutdropdown } from "./aboutdropdown";
    
//imported Style sheet
import "../styles/components/topnavbar.css"
import "../styles/components/aboutdropdown.css"


import { useState } from "react";

export function Topnavbar(props){
    const [drop, setDrop] = useState(false)


    return(
        <>
            <section className="nav-container" >
               
                <div className="inner-container">
                    <figure>
                        <div className="log"><img src={logo} alt="Logo" /></div>
                        <div className="logo-name"><h2>JESUS CHRIST</h2> <h1>ASSEMBLY, BATH</h1></div>
                    </figure>
                    <aside className="nav-menu">
                        <div><Link to={"../"}><input type="button" value="Home" /></Link></div>

                        {/* About menu */}
                        <div className="about"  onClick={() => drop === false ? setDrop(true): setDrop(false)}>
                            <input type="button" value="About" />
                            <FaChevronDown className="arrow"/>
   
                            {drop === true ?
                                <Aboutdropdown rccg={"/about-us"} jca={"/about-jca"} leadership={"/leadership"}/>:
                                <Aboutdropdown id="abouthide"/>
                            } 
                        </div>

                        <div onClick={props.ministryClick}>
                            <input type="button" value="Ministries" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div onClick={props.connectClick}>
                            <input type="button" value="Connect" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div onClick={props.mediaClick}>
                            <input type="button" value="Media" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div onClick={props.eventsClick}>
                            <input type="button" value="Events" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div><Link to={"/giving"}><input type="button" value="Give"/></Link></div>
                    </aside>
                    <i className="pi pi-align-justify"></i>
                </div>

            </section>
        </>
    )

    // {drop && return <h1>This is the return</h1>

    //  }
}