import { Link } from "react-router-dom";
import "../styles/pages/raising-giant.css";

// Import media
import VectorOrange from "../media/images/VectorOrange.png";
import RaisingGiantImg1 from "../media/images/RaisingGiantImg1.png";
import RaisingGiantImg2 from "../media/images/RaisingGiantImg2.png";
import RaisingGiantImg3 from "../media/images/RaisingGiantImg3.png";

// Import components
import { Topnavbar } from "../components/topnavbar";
import { Header } from "../components/header";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

export function RaisingGiant() {
  return (
    <div className="raising-giant-page">
      {/* Import Topnavbar component */}
      <Topnavbar />

      {/* Main body */}
      <main>
        {/* Import Raising Giant screen */}
        <Header
          tag={VectorOrange}
          tagname="MINISTERIES"
          tittle="Raising Giants"
        />

        <section className="raising-giant-container">
          <div className="inner-container">
            <div className="inner-container-image">
              <img
                src={RaisingGiantImg1}
                alt="img"
                className="RaisingGiantImg1"
              />
              <div className="bottom-images">
                <img
                  src={RaisingGiantImg2}
                  alt="img"
                  className="RaisingGiantImg2"
                />
                <img
                  src={RaisingGiantImg3}
                  alt="img"
                  className="RaisingGiantImg3"
                />
              </div>
            </div>
            <div className="inner-container-texts">
              <div className="sub-tittle">
                <div className="icon-with-name">
                  <img src={VectorOrange} alt="icon" />
                  <p>JCA YOUTHS</p>
                </div>
                <h3>Raising Giants</h3>
              </div>
              <div className="top-paragraph">
                <p>
                  Raising Giants is a youth and young adults platform for the
                  discovery, development and deployment of the next generation
                  of cutting edge and exemplary leaders who are unreserved,
                  unwavering and  uncompromising in their identities, knowledge
                  and conviction of their God (1 Tim. 4:12 & Daniel 1:8). The
                  visionary scope of Raising Giants is vast. It is Church beyond
                  walls of JCA Bath and spans across denominations.
                </p>
                <p>
                  Raising Giants was a visionary initiative set up for the next
                  generation of transformational leaders both in the spiritual
                  and financial dimensions in the order of kings, priests,
                  governmental, prophetic and worship dimensions. It was a space
                  developed to raise young people of robust spiritual stature to
                  leverage on whilst shaping their secular worlds of influence
                  for end time kingdom harvest.
                </p>
              </div>
              <div className="bottom-paragraph">
                <p>
                  Raising Giants was instituted to disciple the next generation
                  of leaders with the mantles and the spirits of just men made
                  perfect like David, Daniel, Joseph, Nehemiah, Mordecai,
                  Deborah, Esther etc who will occupy the 7-mountains of
                  influence to shape and sharpen the spiritual, cultural,
                  business, economical, media, governmental and educational
                  landscape of our time (1 Sam.13:19-22) while they are also
                  committed to the teaching and discipleship of others (2
                  Tim.2:2).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Import Location */}
        <Location />
      </main>

      {/* Import Footer */}
      <Footer/>
    </div>
  );
}
