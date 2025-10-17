import "../styles/components/eventsdropdown.css"
import { Link } from "react-router-dom"

export function Eventdropdown(props){
    return(
        <>
            <div className="eventsdropdown" id={props.id}>
                <div className="mini-inner-contents">
                    <Link className="link"><div className="dropdown-btn"><p>Programe</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>Archives</p></div></Link>
                </div>
               
            </div>
        </>
    )
}