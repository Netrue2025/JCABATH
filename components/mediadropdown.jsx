import "../styles/components/mediadropdown.css"
import { Link } from "react-router-dom"

export function Mediadropdown(props){
    return(
        <>
            <div className="mediadropdown" id={props.id}>
                <div className="mini-inner-contents">
                    <Link className="link"><div className="dropdown-btn"><p>Messages</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>Testimonials</p></div></Link>
                </div>
               
            </div>
        </>
    )
}