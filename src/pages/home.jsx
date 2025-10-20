import { Link } from "react-router-dom"
import "../styles/pages/home.css"
import "../styles/components/ministrydropdown.css"
import "../styles/components/aboutdropdown.css"

//imported components
import { Topnavbar } from "../components/topnavbar"
// import { Aboutdropdown } from "../components/aboutdropdown"
import { Ministriesdropdown } from "../components/ministriesdropdown"    
import { useState } from "react"
import { Mediadropdown } from "../components/mediadropdown"
import { Connectdropdown } from "../components/connectdropdown"
import { Eventdropdown } from "../components/eventdropdown"
import { Footer } from "../components/footer"
import { FaArrowRightLong } from "react-icons/fa6";
import { Location } from "../components/location"

export function Home(){
  
  const [ministry, setMinistry] = useState(false)
  const [connect, setConnect] = useState(false)
  const [events, setEvents] = useState(false)
  const [media, setMedia] = useState(false)
    return(
      <div>
        
        { ministry === false && connect === false && events === false && media === false ?
          <Topnavbar onClick={() => setDrop(true)} ministryClick={() => { setMinistry(true) }} eventsClick = {() => {setEvents(true)}} connectClick = {() => {setConnect(true)}} mediaClick = {() => {setMedia(true)}}/>:
          <Topnavbar onClick={() => setDrop(false)} ministryClick={() => setMinistry(false)} eventsClick = {() => {setEvents(false)}} connectClick = {() => {setConnect(false)}} mediaClick = {() => {setMedia(false)}} />
         
        }

    
        {ministry === true ?
          <Ministriesdropdown to={"/about-jca"}/> || setDrop(false):
          <Ministriesdropdown id="ministryhide" />


        }
        {connect === true ?
          <Connectdropdown />:
          <Connectdropdown id="connecthide" />

        }
        {events === true ?
          <Eventdropdown />:
          <Eventdropdown id="hide" />
        }
        {media === true ? 
            <Mediadropdown />:
            <Mediadropdown id="hide" />
      }

     
        <main>
          <div className="home-screen">
            <div className="heading-with-button">
              <div className="heading-container">
                <div className="heading-text">
                  <h1>Welcome</h1>
                  <div className="to-church"><h2>to</h2><span>CHURCH</span></div>
                </div> 
                <p>For with God nothing shall be impossible -<span>LUKE 1 : 37</span></p>
              </div>


              {/* Contact us Now botton */}
              <Link to={'/contact-us'} className="link">
                  <button>
                    <p>Contact us now</p>
                    <FaArrowRightLong className="arrow"/>
                  </button>
              </Link>

            </div>

          </div>

          {/* Ride with us and location section */}
          <Location />
        </main>
    


          <Footer />

      </div>
    )
}