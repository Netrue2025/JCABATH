import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import "../styles/components/ministrydropdown.css";
import "../styles/components/aboutdropdown.css";

//imported components
import { Topnavbar } from "../components/topnavbar";
// import { Aboutdropdown } from "../components/aboutdropdown"
// import { Ministriesdropdown } from "../components/ministriesdropdown"
// import { useState } from "react"
// import { Mediadropdown } from "../components/mediadropdown"
// import { Connectdropdown } from "../components/connectdropdown"
// import { Eventdropdown } from "../components/eventdropdown"
import { Footer } from "../components/footer";
import { FaArrowRightLong } from "react-icons/fa6";
import { Location } from "../components/location";
import { FaChurch } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
// import pastorandwife from "../media/images/pastorandwife.png";
// import pstmrs from "../media/images/pstmrs.png";
// import congregation from "../media/images/congregation.png";
import yellowicon from "../media/images/yellow-icon.png";
// import praying from "../media/images/praying.png";

export function Home() {
  return (
    <div>
      <Topnavbar />

      {/* Main body contents */}
      <main>
        {/* First Container */}
        <div className="home-screen">
          <div className="heading-with-button">
            <div className="heading-container">
              <div className="heading-text">
                <h1>Welcome</h1>
                <div className="to-church">
                  <h2>to</h2>
                  <span>CHURCH</span>
                </div>
              </div>
              <p>
                For with God nothing shall be impossible -
                <span>LUKE 1 : 37</span>
              </p>
            </div>

            {/* Contact us Now botton */}
            <Link to={"/contact-us"} className="link">
              <p>Contact us now</p>
              <FaArrowRightLong className="arrow" />
            </Link>
          </div>
        </div>

        {/* Second Container */}
        <div className="contacts-main-container">
          <div className="contact-inner-container">
            <div className="email">
              <MdEmail className="contact-icon" />
              <p>info@jesuschristassembly.org I</p>
            </div>
            <div className="instagram">
              <RiInstagramLine className="contact-icon" />
              <p>@rccgjcabath I</p>
            </div>
            <div className="charity">
              <FaChurch className="contact-icon" />
              <p>Charity Organization Number: 1125740</p>
            </div>
          </div>
        </div>

        {/* Third container */}
        <div className="third-container">
          <div className="third-container-inset">
            <div className="images-container">
              <div className="lg-image">
                <img
                  src="images/pastorandwife.png"
                  alt="Image of pastor Farouq and wife"
                  loading="lazy"
                />
              </div>
              <div className="sm-image">
                <img src="images/pstmrs.png" alt="image of pastor Mrs" />
                <img src="images/congregation.png" alt="Image of congregation" />
              </div>
            </div>
            <div className="third-container-details">
              <div className="t-c-header-container">
                <div className="t-c-tag">
                  <img src={yellowicon} alt="yellow icon" />
                  <p>RCCGJCABATH</p>
                </div>
                <h2>Welcome to</h2>
                <h3>JESUS CHRIST ASSEMBLY, BATH.</h3>
              </div>

              <p>
                We’re a family in Christ,
                <span>
                  committed to discipleship, capacity building, and global
                  impact. <br />
                  <br />
                  We believe God calls us to rise and build — strengthening
                  lives and transforming communities through His Word and
                  Spirit. <br />
                  <br />
                  “Then I said to them, ‘You see the trouble we are in:
                  Jerusalem lies in ruins, and its gates have been destroyed by
                  fire. Come, let us rebuild the wall of Jerusalem, that we may
                  no longer suffer disgrace.’ … A nd they said, ‘Let us rise up
                  and build.’ So they strengthened their hands for the good
                  work.”
                  <br />
                </span>
                — Nehemiah 2:17–18 (ESV)
                <span>
                  <br />
                  <br />
                  Join us as we obey that call — equipping disciples for local
                  and global impact.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Container */}
        <div className="fourth-continer">
          <div className="f-c-inset">
            <div className="f-c-inset-wrapper">
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
                      <h4>
                        <span>1ST</span> SUNDAY <br /> OF THE MONTH
                      </h4>
                      <p>2:00 PM - 4:30 PM</p>
                    </div>
                  </div>

                  <div className="box-three">
                    <div className="b-t-content">
                      <h4>
                        <span>OTHER</span> SUNDAYS <br /> OF THE MONTH
                      </h4>
                      <p>2:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fourth-container-img">
              <img src="images/praying.png" alt="Image of Congregtion praying mode" loading="lazy" />
            </div>
            <Link to={"/services"} className="link-f">
              <button>
                <p>Learn more</p>
                <FaArrowRightLong className="arrow" />
              </button>
            </Link>
          </div>

          {/* <Link to={'/services'} className="link-f">
              <button>
                <p>Learn more</p>
                <FaArrowRightLong className="arrow"/>
              </button>
            </Link> */}
        </div>

        {/* Fifth Container */}
        <div className="fifth-container">
          <div className="fifth-inner-con">
            <div className="inner-content-one">
              <div className="one-content">
                <div className="icon-with-name">
                  <img src={yellowicon} alt="Yellow icon" />
                  <p>PRAYER & TESTIMONY</p>
                </div>
                <h2>We can stand with You</h2>
                <p>
                  Let us join you in prayer and rejoice with you in testimonies
                  of answered prayers.
                </p>
              </div>
            </div>

            <div className="inner-content-twonthree">
              <div className="inner-content-two">
                <div className="two-content">
                  <div className="two-text">
                    <h2>Need Prayers?</h2>
                    <p>
                      We believe in the power of prayer. Whatever your need, our
                      prayer team is ready to stand with you in faith. Be rest
                      assured that your requests will be kept private.
                    </p>
                  </div>
                  <Link to={"/prayer-request"} className="link">
                    <button>
                      <p>Send a Prayer Request</p>
                      <FaArrowRightLong className="arrow" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="inner-content-three">
                <div className="inner-three">
                  <div className="three-text">
                    <h2>Do you have a testimony?</h2>
                    <p>
                      Your story can inspire faith in others! Share how God has
                      answered your prayers or transformed your life
                    </p>
                  </div>
                  {/* Button */}
                  <Link to="/testimonies">
                    <button>
                      <p>Share Your Testimony</p>
                      <FaArrowRightLong className="arrow" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ride with us and location section */}
        <Location />
      </main>

      <Footer />
    </div>
  );
}
