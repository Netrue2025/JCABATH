import { FaChevronDown } from "react-icons/fa";
import "../styles/components/menu.css";
import { Link } from "react-router-dom";


export function Menu(props){
    
    return(
        <div className="menu-container" id={props.id}>
            <div className="inset-container">
                <div className="inner-one">
                    <Link to="/" className="link">
                        <div className="menu-btn">
                            <h2>Home</h2>
                        </div>
                    </Link>
    
                    <div className="menu-btn">
                        <h2>About</h2>
                        <FaChevronDown className="arrow"/>
                    </div>
                    <div className="menu-btn">
                        <h2>Ministrie</h2>
                        <FaChevronDown className="arrow"/>
                    </div>
                    <div className="menu-btn">
                        <h2>Connect</h2>
                        <FaChevronDown className="arrow"/>
                    </div>
                    <div className="menu-btn">
                        <h2>Media</h2>
                        <FaChevronDown className="arrow"/>
                    </div>
                    <div className="menu-btn">
                        <h2>Events</h2>
                        <FaChevronDown className="arrow"/>
                    </div>  

                    <Link to="/giving" className="link">
                        <div className="menu-btn">
                            <h2>Give</h2>
                        </div>
                    </Link>   

                </div>
            </div>
            <Link to="/contact-us" className="link">
                <button><p>Contact us now</p></button>
            </Link>
            
        </div>
    )
}