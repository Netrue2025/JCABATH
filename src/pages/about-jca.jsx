import { Link } from "react-router-dom";
import { Topnavbar } from "../components/topnavbar";
import "../styles/pages/about-jca.css";

// Import media
import Vector from "../media/images/Vector.png"

export function AboutJca(){
    return(
        <div>
          <Topnavbar/>
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
          </main>
        </div>
    )
}