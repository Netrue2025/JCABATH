import { Link } from "react-router-dom";
import "../styles/pages/giving.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
// Import media
import VectorOrange from "../media/images/VectorOrange.png";
import Clippathgroup from "../media/images/Clippathgroup.png";

// Import Components
import { Topnavbar } from "../components/topnavbar";
import { Location } from "../components/location";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Giving() {
    const [copied, setCopied] = useState(false);

     const accountName = "AMAZING GRACE";
    const handleCopyName = () => {
      navigator.clipboard.writeText(accountName); 

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    }

    const accountNo = "13891518";
    const handleCopy = () => {
      navigator.clipboard.writeText(accountNo); 
        setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    }

    const sortcode = "20-68-15";
    const handleCopySortCode = () => {
      navigator.clipboard.writeText(sortcode); 
        setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    }

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
                      <h2>{accountName}</h2>
                      <img src={Clippathgroup} alt="icon" onClick={handleCopyName}/>
                    </div>
                  </div>
                  <div className="card card-item2">
                    <p>ACCOUNT NUMBER: </p>
                    <div className="name-with-icon">
                      <h2>{accountNo}</h2>
                      <img src={Clippathgroup} alt="icon" onClick={handleCopy}/>
                    </div>
                 
                  </div>
                  <div className="card card-item3">
                    <p>SORT CODE: </p>
                    <div className="name-with-icon">
                      <h2>{sortcode}</h2>
                      <img src={Clippathgroup} alt="icon" onClick={handleCopySortCode}/>
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        top: "22.0rem",
                        right: "40px",
                        background: "#4caf50",
                        color: "white",
                        padding: "10px 16px",
                        borderRadius: "8px",
                        opacity: copied ? 1 : 0,
                        transform: copied ? "translateY(0)" : "translateY(-10px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        pointerEvents: "none",
                      }}
                      >
                      Copied!
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
