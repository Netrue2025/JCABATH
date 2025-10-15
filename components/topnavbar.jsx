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
                            <FaChevronDown />
                        </div>
                        <div><input type="button" value="Ministries" /></div>
                        <div><input type="button" value="Connect" /></div>
                        <div><input type="button" value="Media" /></div>
                        <div><input type="button" value="Events" /></div>
                        <div><Link to={"/giving"}><input type="button" value="Give"/></Link></div>
                    </aside>
                </div>
          </section>
        </>
    )
}