import "../styles/components/footer.css"
import logo from "../media/images/logo.png"


export function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-inset-container">
                <div className="footer-contacts">
                    <div className="logo-name">
                        <div className="logo">
                            <img src={logo} alt="Church Logo image" />
                            <h1>JESUS CHRIST ASSEMBLY BATH</h1>
                        </div>
                        <div className="loogo-details">
                            <p>RCCG JCA is dedicated to discipleship, capacity building, and global impact. </p>
                        </div>
                    </div>

                    <div className="email-phone">
                        <div className="email"><p>info@jesuschristassembly.org</p></div>
                        <div className="phone">+443 704 878 2063</div>

                    </div>
                </div>


                <div>

                </div>

            </div>
        </div>
    )
}