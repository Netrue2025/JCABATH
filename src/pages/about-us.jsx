import { Link } from "react-router-dom";
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
    <div className="about_us">
      {/* Top navigation bar */}
      <Topnavbar />
      <main>
        {/* Who We Are */}
        <section className="about-us-home">
          <div className="about-rccg">
            <div className="icon-with-name">
              <img src={Vector} alt="vector" />
              <p>ABOUT RCCG</p>
            </div>
            <p>Who We Are</p>
          </div>
        </section>

        {/* Our Goal */}
        <section className="our-goal">
          <div className="our-goal-container">
            <img src={Pastor} alt="Our Pastor" />
            <div className="our_goal-content">
              <div className="our_goal-content-title">
                <div className="icon-with-name">
                  <img src={VectorOrange} alt="" className="our_goal-vector" />
                  <p>OUR GOAL</p>
                </div>
                <h1>RCCG WORLD WIDE</h1>
                <h2>Mission & Vision</h2>
              </div>
              <ol>
                <li>To make heaven.</li>
                <li>To take as many people with us.</li>
                <li>
                  To have a member of RCCG in every family of all nations.
                </li>
                <li>
                  To accomplish No. 1 above, holiness will be our lifestyle.
                </li>
                <li>
                  <p>
                    To accomplish No. 2 and 3 above, we will plant churches
                    within five minutes walking distance in every city and town
                    of developing countries and within five minutes driving
                    distance in every city and town of developed countries.
                  </p>
                </li>
                <li>
                  We will pursue these objectives until every Nation in the
                  world is reached for the Lord Jesus Christ
                </li>
              </ol>

              {/* Link to RCCG button */}
              <Link to={"/"} className="link">
                <button>
                  See more <FaArrowRightLong className="arrow" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Ride with us and location section  */}
        <section className="location">
          <Location />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
