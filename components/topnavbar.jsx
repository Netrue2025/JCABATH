import { Link } from "react-router-dom";
import logo from "../media/images/logo.png"
import { FaChevronDown } from "react-icons/fa";
import 'primeicons/primeicons.css';
    
//imported Style sheet
import "../styles/components/topnavbar.css"

// import { useState } from "react";

export function Topnavbar(props){
    // const [drop, setDrop] = useState(false)
    return(
        <>
            <section className="nav-container" id={props.id}>
               
                <div className="inner-container">
                    <figure>
                        <div className="log"><img src={logo} alt="Logo" /></div>
                        <div className="logo-name"><h2>JESUS CHRIST</h2> <h1>ASSEMBLY, BATH</h1></div>
                    </figure>
                    <aside className="nav-menu">
                        <div><Link to={"../"}><input type="button" value="Home" /></Link></div>
                        <div onClick={props.onClick}>
                            <input type="button" value="About" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div>
                            <input type="button" value="Ministries" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div>
                            <input type="button" value="Connect" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div>
                            <input type="button" value="Media" />
                            <FaChevronDown className="arrow"/>
                        </div>
                        <div>
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