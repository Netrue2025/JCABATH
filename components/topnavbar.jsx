import { Link } from "react-router-dom";
import logo from "../media/images/logo.png"
import { FaChevronDown } from "react-icons/fa";

//imported Style sheet
import "../styles/components/topnavbar.css"

export function Topnavbar(){
    return(
        <>
            <section className="nav-container">
                <div className="inner-container">
                    <figure>
                        <div className="log"><img src={logo} alt="Logo" /></div>
                        <div className="logo-name"><h2>JESUS CHRIST</h2> <h1>ASSEMBLY, BATH</h1></div>
                    </figure>
                    <aside className="nav-menu">
                        <div><Link to={"../"}><input type="button" value="Home" /></Link></div>
                        <div>
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
                </div>
            </section>
        </>
    )
}