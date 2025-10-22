import { Link } from "react-router-dom";
import { Topnavbar } from "../components/topnavbar";
import "../styles/pages/about-jca.css";

// Import media
import Vector from "../media/images/Vector.png"
import VectorOrange from "../media/images/VectorOrange.png"

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
            <section className="church-vision">
              <div className="church-vision-box">
                <div className="icon-with-name">
                  <img src={VectorOrange} alt="icon" />
                  <p>RCCG, JESUS CHRIST ASSEMBLY, BATH.</p>
                </div>
                <h2>Church Vision</h2>
                <p>Discipleship and Capacity Building For Global Impact. <br /> <span>Nehemiah 2:17-18</span></p>
              </div>
            </section>
          </main>
        </div>
    )
}