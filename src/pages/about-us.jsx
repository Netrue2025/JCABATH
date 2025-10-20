// import { Link } from "react-router-dom";
import { Topnavbar } from "../components/topnavbar";
import "../styles/pages/about-us.css";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

// Import media
import Vector from "../media/images/Vector.png";
import Pastor from "../media/images/Pastor.png";
import VectorOrange from "../media/images/VectorOrange.png";
import { FaArrowRightLong } from "react-icons/fa6";

export function AboutUs() {
  return (
    <div className="about_us-container">
      <Topnavbar />
      {/* Who We Are */}
      <section className="about-us">
        <div className="about-us-content">
          <div className="content-subheading">
            <img src={Vector} alt="vector" />
            <span>ABOUT RCCG</span>
          </div>
          <div className="title">
            <p>Who We Are</p>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="our-goal-container">
        <div className="our_goal-wrapper">
          
          <div className="our_goal-img">
            <img src={Pastor} alt="Pastor" />
          </div>

          <div className="our_goal-content">
            <div className="our_goal-content--title">
              <div className="content--title">
                <img src={VectorOrange} alt="" className="our_goal-vector" />
                <p>OUR GOAL</p>
              </div>
              <h1>RCCG WORLD WIDE</h1>
              <h2>Mission & Vision</h2>
            </div>
            <div className="our_goal-list">
              <p>1. To make heaven.</p>
              <p>2. To take as many people with us.</p>
              <p>3. To have a member of RCCG in every family of all nations.</p>
              <p>4. To accomppsh No. 1 above, hopness will be our lifestyle.</p>
              <p>
                5. To accomppsh No. 2 and 3 above, we will plant churches within
                five minutes walking distance in every city and town of
                developing countries and within five minutes driving distance in
                every city and town of developed countries.
              </p>
              <p>
                6. We will pursue these objectives until every Nation in the
                world is reached for the Lord Jesus Christ
              </p>
            </div>
            <div className="our_goal-btn">
              <button className="btn">
                See more <FaArrowRightLong className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ride with us and location section  */}
      <section className="location">
        <Location />
      </section>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
