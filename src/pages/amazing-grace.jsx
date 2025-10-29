// import { Link } from "react-router-dom";
import { Topnavbar } from "../components/topnavbar";
import { Header } from "../components/header"
import yellowicon from "../media/images/yellow-icon.png"
import greenicon from "../media/images/Vector.png"
import "../styles/pages/amazing-grace.css"
import { Location } from "../components/location"
import { Footer } from "../components/footer"

export function AmazingGrace(){
    return(
        <>
        {/* Top navigation bar */}
        <Topnavbar />

        {/* Dynamic Header section */}
        <Header tag={yellowicon} tagname="MINISTRIES" tittle="AMAZING GRACE"/>

        {/* Main body contents */}
        <main className="main">
          {/* Mission statement section */}
          <div className="mission-statement-con">
            <div className="tag-with-name">
              <img src={greenicon} alt="This is the green icon" />
              <p>AMAZING GRACE</p>
            </div>
            <div className="m-s-header">
              <h2>mission statement</h2>
            </div>
            <div className="m-s-contents">
              <p>
                Bringing Jesus to our community especially 
                those less privileged in words and deeds in alignment with the words of Jesus in 
                <br /><span>Matthew 25:35-36</span><br />
                "I was hungry and you gave me to eat, I was thirsty and 
                you gave me  drink, a stranger and you welcomed me, naked 
                and you clothed me, sick
                and you looked after me, in prison and you visited me."
              </p>
            </div>
          </div>

          {/* Amazing grace outreach section */}
          <div className="a-g-outreach-container">
            <div className="a-g-header">
              <h3>Amazing 
                Grace Outreach <span>(Mark 16:15)</span>
              </h3>
            </div>
            <div className="a-g-contents">
              <p>
                Amazing Grace <span>is a divinely inspired initiative in 
                obedience to our Master Jesus on the subject of Great
                Commission. The initiative has a 2-winged component 
                and was developed not only to serve as an evangelism 
                outlet but also to provide a support network of meeting
                the needs of those in our community as part of our
                Community Social Responsibility (CSR) agenda. These two
                 wings are outlined below;</span>
              </p>
            </div>
          </div>

          {/*Green black boxes section  */}
          <div className="boxes-container">
            <div className="green-box">
              <div className="g-b-header">
                <h3>
                  Amazing Grace outreach <span>Evangelism</span>
                </h3>
              </div>
              <div className="g-b-paragraph">
                <p>
                  This is the arm of this initiative that focuses on 
                  preaching the gospel of Christ Jesus to the people 
                  of Bath and the neighborhood areas. There is a team 
                  of Church members who are dedicated to evangelism 
                  within the Bath and associated neighborhood areas. 
                  We attend Bath City Centre on a monthly basis. We 
                  also visit other areas such as Frome, Keynsham etc 
                  on occasional basis for evangelism. We engage, 
                  distribute tracts and fliers as well as offer prayers 
                  to those who wish for us to do so. We also engage with
                  both Bath Spa and University of Bath Christian Unions
                  and the campuses for their student fairs  which have
                  been hugely successful over the past few years. 
                  We continue to pray for the salvation of souls of
                  people in this region and the prevention and elimination
                  of social vices in this territory in Jesus name.
                </p>
              </div>
            </div>
            <div className="black-box">
              <div className="b-b-header">
                <h3>
                  Amazing Grace outreach <span>Evangelism</span>
                </h3>
              </div>
              <div className="b-b-paragraph">
                <p>
                  As part of JCA Bath's CSR agenda, Amazing Grace takes 
                  pride in our continuous commitment to reaching out to 
                  the homeless, marginalised and less privileged in the 
                  community of Bath and it’s neighbouring environs. We 
                  distribute food items, clothing and other associated 
                  accessories to provide basic amenities to those in 
                  need in our community. We provide warm clothing and 
                  accessories during the winter months and provide money
                  via cheque to various charities within Bath e.g Julian
                  House and the YMCA. For outside Bath, we provide the
                  same service to Westbury YMCA,
                  Keynsham Food Bank and Kingswood Food Bank in Bristol.
                </p>
              </div>
            </div>
          </div>

          {/* others */}
          <div className="others-container">
            <p>
              Finally, <span> we also visit the most deprived areas in
              Bath and distribute non-perishable food items, 
              clothing and accessories particularly during the
              winter and festive periods. It is our vision to 
              provide housing support and eradicate food and heat
              poverty in the Bath and neighbouring areas in the 
              foreseeable future. We aim to be able to eliminate
              this public health burden off the government while
              also providing employment where possible 
              to improve the growth and economy of this region.
              </span>
            </p>
          </div>
        </main>

        {/* Location Section */}
        <Location />

        {/* Footer section */}
        <Footer />
        
      </>
    )
}