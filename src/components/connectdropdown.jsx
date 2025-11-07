import "../styles/components/connectdropdown.css"
import { Link } from "react-router-dom"

export function Connectdropdown(props){
    return(
        <>
            <div className="connectdropdown" id={props.id}>
                <div className="mini-inner-contents">
                    <Link className="link" to="/services"><div className="dropdown-btn"><p>Services</p></div></Link>
                    <Link className="link" to="/prayer-request"><div className="dropdown-btn"><p>Prayer Request</p></div></Link>
                    <Link className="link" to="/contact-us"><div className="dropdown-btn"><p>Contact Us</p></div></Link>
                </div>
               
            </div>
        </>
    )
}