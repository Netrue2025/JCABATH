import { Link } from "react-router-dom";
import "../styles/pages/leadership.css";
import { Topnavbar } from "../components/topnavbar";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

// Import media
import Vector from "../media/images/Vector.png";
import pastorFarouq from "../media/images/pastorFarouq.png";
import dcnsAdetunbi from "../media/images/dcnsAdetunbi.png";
import pstBlessing from "../media/images/pstBlessing.png";
import mrsTeclar from "../media/images/mrsTeclar.png";

export function Leadership() {
  return (
    <div>
      {/* Top navigation bar */}
      <Topnavbar />

      {/* main body contents */}
      <main>
        {/* Leadership screen */}
        <section className="leadership-screen">
          <div className="inner-container">
            <div className="icon-with-name">
              <img src={Vector} alt="icon" />
              <p>RCCG JCA</p>
            </div>
            <h1>Leadership</h1>
          </div>
        </section>

        {/* Meet our leaders */}
        <section className="our-leaders">
          <div className="inner-container">
            <div className="subheading">
              <h1>Meet Our Leaders</h1>
              <p>
                They are dedicated to Discipleship, Capacity building, and
                Global impact.
              </p>
            </div>
            <div className="our-leaders-profile-cards">
              <div className="card card-1">
                <img src={pastorFarouq} alt="Residential Pastor" />
              </div>
              <div className="card card-2">
                <img src={dcnsAdetunbi} alt="RCCG JCA Leader" />
              </div>
              <div className="card card-3">
                <img src={pstBlessing} alt="RCCG JCA Pastor" />
              </div>
              <div className="card card-4">
                <img src={mrsTeclar} alt="RCCG JCA Leader" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Locaton */}
        <Location />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
