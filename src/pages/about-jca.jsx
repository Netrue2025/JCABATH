// import { Link } from "react-router-dom";
import { Topnavbar } from "../components/topnavbar";
import "../styles/pages/about-jca.css";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

// Import media
import Vector from "../media/images/Vector.png";
import VectorOrange from "../media/images/VectorOrange.png";

export function AboutJca() {
  return (
    <div>
      {/* Top navigation bar section */}
      <Topnavbar />

      {/* main body contents */}
      <main>
        {/* About RCCG JCA screen */}
        <section className="about-jca-screen">
          <div className="inner-container">
            <div className="icon-with-name">
              <img src={Vector} alt="" />
              <p>ABOUT RCCG JCA</p>
            </div>
            <p>MISSION & VISION</p>
          </div>
        </section>

        <section className="church-vision">
          <div className="church-vision-box">
            <div className="icon-with-name">
              <img src={VectorOrange} alt="icon" />
              <p>RCCG, JESUS CHRIST ASSEMBLY, BATH.</p>
            </div>
            <h2>Church Vision</h2>
            <p>
              Discipleship and Capacity Building For Global Impact. <br />{" "}
              <span>Nehemiah 2:17-18</span>
            </p>
          </div>
          <div className="mission-statements">
            <h2>Mission Statements</h2>
            <div className="mission-statements-cards">
              <div className="card card1">
                <h3>Discovering</h3>
                <p>
                  Embarking on intentional outreach for souls and establishing a
                  thriving platform for emerging leaders occupying the 7
                  mountains of influence.
                </p>
              </div>
              <div className="card card2">
                <h3>Developing</h3>
                <p>
                  An active discipleship regime of revivalists and world
                  changers through the vehicle of The Word and The Holy Spirit
                  enablement.
                </p>
              </div>
              <div className="card card3">
                <h3>Dispatching</h3>
                <p>
                  Deployment of global influencers, shapers, sharpeners and
                  end-time builders of God's kingdom mandate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location section */}
        <Location />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
