import { Link } from "react-router-dom";
import "../styles/pages/giving.css";
import { FaArrowRightLong } from "react-icons/fa6";

// Import media
import VectorOrange from "../media/images/VectorOrange.png";
import Clippathgroup from "../media/images/Clippathgroup.png";

// Import Components
import { Topnavbar } from "../components/topnavbar";
import { Location } from "../components/location";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Giving() {
  return (
    <div>
      {/* Top navigation bar */}
      <Topnavbar />

      {/* Main body of Giving page */}
      <main>
        {/* Donation screen */}
        <Header tag={VectorOrange} tagname="GIVING" tittle="Donations" />

        <section className="ways-to-donate">
          <div className="inner-container">
            <div className="ways-to-give">
              <div className="donations">
                <div className="icon-with-name">
                  <img src={VectorOrange} alt="icon" />
                  <p>DONATIONS</p>
                </div>
                <h1>WAYS TO GIVE</h1>
              </div>
              <p>
                Join us as we put our money right where our faith is, partnering
                with God for the spread of the Gospel in our day.
              </p>
            </div>
            {/* Bank details section */}
            <div className="amazing-grace-bank-details">
              <div className="account-details">
                <div className="want-to-donate">
                  <p className="first-paragraph">
                    WANT TO DONATE TO <br />
                    <span className="amazing-grace">AMAZING GRACE?</span>
                  </p>
                  <p className="second-paragraph">
                    DONATE TO THE CHARITY'S <br />
                    <span className="bank-details">BANK DETAILS</span> BELOW:
                  </p>
                </div>
                <div className="account-information-card">
                  <div className="card card-item1">
                    <p>NAME:</p>
                    <div className="name-with-icon">
                      <h2>AMAZING GRACE</h2>
                      <img src={Clippathgroup} alt="icon" />
                    </div>
                  </div>
                  <div className="card card-item2">
                    <p>ACCOUNT NUMBER: </p>
                    <div className="name-with-icon">
                      <h2>13891518</h2>
                      <img src={Clippathgroup} alt="icon" />
                    </div>
                  </div>
                  <div className="card card-item3">
                    <p>SORT CODE: </p>
                    <div className="name-with-icon">
                      <h2>20-68-15</h2>
                      <img src={Clippathgroup} alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact button */}
              <div className="contact-btn">
                <button>
                  Contact Pst. Farouq
                  <FaArrowRightLong className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Location */}
        <Location />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
