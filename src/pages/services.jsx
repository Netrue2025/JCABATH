
// import "../styles/pages/home.css";
import yellowicon from "../media/images/yellow-icon.png";
import praying from "../media/images/praying.png"
import "../styles/pages/services.css";
import { Topnavbar } from "../components/topnavbar";

export function Services(){
    return(
        <>
          {/* Top nav bar */}
          <Topnavbar />
          <div className="fourth-continer">
            <div className="f-c-inset">
              <div>
                <div className="tittle-container">
                  <div className="f-c-tag">
                    <img src={yellowicon} alt="Yellow icon" />
                    <p>SERVICES</p>
                  </div>
                  <div className="f-c-tittle">
                    <h3>Our Sunday</h3>
                    <h2>SERVICE</h2>
                  </div>
                </div>

                <div className="inner-boxes">
                  <div className="box-one">
                    <h4>SUNDAY SERVICES</h4>
                    <p>2:00 PM - 4:00 PM</p>
                  </div> 
                  <div className="box-two-three">
                      <div className="box-two">
                        <div className="b-t-contents">
                          <h4><span>1ST</span> SUNDAY <br /> OF THE MONTH</h4>
                        <p>2:00 PM - <br /> 4:30 PM</p>
                        </div>
                      </div>
                      
                      <div className="box-three">
                        <div className="b-t-content">
                          <h4><span>OTHER</span> SUNDAYS <br /> OF THE MONTH</h4>
                          <p>2:00 PM - <br /> 4:00 PM</p>
                        </div>

                      </div>
                    </div>

                </div>
              </div>
                <img src={praying} alt="Image of Congregtion praying mode" />
              
            </div>
          </div>
          
        </>
    )
}