import "../styles/components/ministrydropdown.css"
import { Link } from "react-router-dom"

export function Ministriesdropdown(props){
    return(
        <>
            <div className="ministrydropdown" id={props.id}>
                <div className="mini-inner-contents">
                    <Link className="link" to="/amazing-grace"><div className="dropdown-btn"><p>Amazing Grace</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>AJCA Good Women</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>Raising Giants</p></div></Link>
                    <Link className="link"><div className="dropdown-btn"><p>Children's Department</p></div></Link>
                </div>
               
            </div>
        </>
    )
}