import "../styles/components/aboutdropdown.css"
import { Link } from "react-router-dom"

export function Aboutdropdown(props){
    return(
        <>
            <div className="aboutdropdown" id={props.id}>
                <div className="inner-contents">
                    <Link className="link"><div className="dropdown-btn"><p>About RCCG</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>About RCCG JCA</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>Leadership</p></div></Link>
                </div>
               
            </div>
        </>
    )
}