import { Link } from "react-router-dom";
import "../styles/pages/contact-us.css";

// Import Components
import { Topnavbar } from "../components/topnavbar";
import { Header } from "../components/header";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

// Import media
import VectorOrange from "../media/images/VectorOrange.png";
import whatsappicon from "../media/images/whatsappicon.png";
import whatsappiconsvg from "../media/images/whatsappiconsvg.png";
import instagramicon from "../media/images/instagramicon.png";
import youtubeicon from "../media/images/youtubeicon.png";
import facebookicon from "../media/images/facebookicon.png";
import submitarrowicon from "../media/images/submitarrowicon.png";

export function ContactUs() {
  return (
    <>
      {/* Import Topnavbar component */}
      <Topnavbar />

      {/* Main section of the webpage */}
      <main>
        {/* Import Contact-us screen */}
        <Header tag={VectorOrange} tagname="CONNECT" tittle="Contact Us" />

        {/* Contact details section */}
        <section className="contact-container">
          <div className="inner-container">
            <div className="contact-details">
              <div className="get-in-touch">
                <h2>Get in touch</h2>
                <p>
                  You can fill the form to your right to leave us a message or
                  contact us through our details for an immediate response.
                </p>
                <div className="contact-information">
                  <div className="contact contact-email">
                    <p>Email address</p>
                    <a href="mailto:info@jesuschristassembly.org">
                      info@jesuschristassembly.org
                    </a>
                  </div>
                  <div className="contact contact-phone">
                    <p>Phone number</p>
                    <a href="tel:+447467160789">+44 7467160789</a>
                  </div>
                  <div className="contact contact-whatsapp">
                    <p>
                      WhatsApp <br />
                      (Pastor Farouq)
                    </p>
                    <a href="#">
                      <img src={whatsappicon} alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="social-media-handles">
                <p>Follow our Social Media handles</p>
                <div className="social-media-icons">
                  <a href="#" className="facebook-link">
                    <img src={facebookicon} alt="facebook-icon" />
                  </a>
                  <a href="#" className="instagram-link">
                    <img src={instagramicon} alt="instagram-icon" />
                  </a>
                  <a href="#" className="youtube-link">
                    <img src={youtubeicon} alt="youtubeicon-icon" />
                  </a>
                  <a href="#" className="whatsapp-link">
                    <img src={whatsappiconsvg} alt="whatsappiconsvg-icon" />
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <label htmlFor="">
                <p>Full Name</p>
                <input
                  type="text"
                  id="input-name"
                  placeholder="Enter full name"
                />
              </label>
              <label htmlFor="">
                <p>Email</p>
                <input type="email" id="" placeholder="Enter email" />
              </label>
              <label htmlFor="">
                <p>Phone number</p>
                <input type="number" id="" placeholder="Enter phone number" />
              </label>
              <label htmlFor="">
                <p>Message</p>
                <input
                  type="text"
                  id="input-message"
                  placeholder="Tell us about your request"
                />
              </label>
              <div className="submit-btn">
                <button type="submit">
                  Submit{" "}
                  <img
                    src={submitarrowicon}
                    alt="icon"
                    className="arrow-icon"
                  />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Import Location component */}
        <Location />
      </main>

      {/* Import Footer component */}
      <Footer />
    </>
  );
}
