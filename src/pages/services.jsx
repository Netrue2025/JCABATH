import { Link } from "react-router-dom";
import "../styles/pages/services.css";
import { FaArrowRight } from "react-icons/fa6";

// Import components
import { Topnavbar } from "../components/topnavbar";
import { Header } from "../components/header";

// Import media
import VectorOrange from "../media/images/VectorOrange.png";
import servicesimage from "../media/images/servicesimage.png";

export function Services() {
  return (
    <div className="services-container">
      {/* Import Topnavbar */}
      <Topnavbar />

      <main>
        {/* import services screen */}
        <Header tag={VectorOrange} tagname="SERVICES" tittle="Service Days" />

        <section class="services-container">
          <div className="inner-container">
            <div className="wrap">
              <div className="title">
                <p>
                  Our Sunday <br /> <span>SERVICES</span>
                </p>
              </div>
              <div className="services-wrap">
                <div className="services-content">
                  <div className="sunday-morning-prayers">
                    <h3>SUNDAY MORNING PRAYERS:</h3>
                    <p>
                      10:00 AM - 11:00 AM <span>via Zoom</span>
                    </p>
                    <div className="join-us-link">
                      <a href="#">
                        Join Zoom Call <FaArrowRight className="arrow" />
                      </a>
                    </div>
                  </div>
                  <div className="sunday-services">
                    <h3>SUNDAY SERVICES</h3>
                    <p>2:00 PM - 4:00 PM</p>
                  </div>
                  <div className="first-sunday-of-the-month">
                    <h3>
                      <span>1ST</span> SUNDAY <br />
                      OF THE MONTH
                    </h3>
                    <p>2:00 PM - 4:30 PM</p>
                  </div>
                  <div className="other-sundays-services">
                    <div className="sub-title">
                      <h3>
                        <span>OTHER</span> SUNDAYS <br />
                        OF THE MONTH
                      </h3>
                      <p>
                        Morning Prayers are at <span>11:00 AM</span> at the
                        church premises
                      </p>
                    </div>
                    <p className="paragraph">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="services-image">
                  <img src={servicesimage} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
