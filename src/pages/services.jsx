import { Link } from "react-router-dom";
import "../styles/pages/services.css";
import { FaArrowRight } from "react-icons/fa6";

// Import components
import { Topnavbar } from "../components/topnavbar";
import { Header } from "../components/header";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

// Import media
import VectorOrange from "../media/images/VectorOrange.png";
import servicesimage from "../media/images/servicesimage.png";
import weekdaysimage from "../media/images/weekdaysimage.png";

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
                  {/* Fisrt container */}
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

                  {/* Second container */}
                  <div className="sunday-services">
                    <h3>SUNDAY SERVICES</h3>
                    <p>2:00 PM - 4:00 PM</p>
                  </div>

                  {/* Third container */}
                  <div className="first-sunday-of-the-month">
                    <h3>
                      <span>1ST</span> SUNDAY <br />
                      OF THE MONTH
                    </h3>
                    <p>2:00 PM - 4:30 PM</p>
                  </div>

                  {/* Fourth container */}
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
                {/* Image container */}
                <div className="services-image">
                  <img src={servicesimage} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Week days services section */}
        <section className="week-days-services">
          <div className="inner-container">
            <div className="week-days-services-image">
              <img src={weekdaysimage} alt="image" />
            </div>
            <div className="week-days-services-content">
              {/* First container */}
              <div className="sub-title">
                <p>
                  Week days <span>SERVICES</span>
                </p>
              </div>

              {/* Second container */}
              <div className="midweek-services">
                <div className="mid-week-container">
                  <div className="mid-week-wrap">
                    <h3>MIDWEEK SERVICE: </h3>
                    <p>EVERY WEDNESDAY</p>
                  </div>
                  <span>5:30 PM - 6:30 PM</span>
                </div>
              </div>

              {/* Third container */}
              <div className="night-vigil">
                <div className="night-vigil-container">
                  <div className="night-vigil-wrap">
                    <h3>NIGHT VIGIL:</h3>
                    <p>3rd Friday of every month</p>
                  </div>
                  <span>11:00 PM - 1:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <Location/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
