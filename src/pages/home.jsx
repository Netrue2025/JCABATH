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
          <h1>This is the home page</h1>
            <Link to={"/about-jca"}>
              <button>Go to About Jca 👉</button>
            </Link>

            <Link to={"/about-us"}>
              <button>Go to About Us 👉</button>
            </Link>

            <Link to={"/amazing-grace"}>
              <button>Go to Amazing Grace 👉</button>
            </Link>

            <Link to={"/children-department"}>
              <button>Go to Children Department 👉</button>
            </Link>

            <Link to={"/contact-us"}>
              <button>Go to Contacts Us 👉</button>
            </Link>

            <Link to={"/giving"}>
              <button>Go to Giving 👉</button>
            </Link>

            <Link to={"/jca-good-women"}>
              <button>Go to Jca Good Women 👉</button>
            </Link>

            <Link to={"/leadership"}>
              <button>Go to Leadership 👉</button>
            </Link>

            <Link to={"/messages"}>
              <button>Go to Messages 👉</button>
            </Link>

            <Link to={"/prayer-request"}>
              <button>Go to Prayer Request 👉</button>
            </Link>

            <Link to={"/raising-giant"}>
              <button>Go to Raising Giant 👉</button>
            </Link>

            <Link to={"/services"}>
              <button>Go to Services 👉</button>
            </Link>

            <Link to={"/testimonies"}>
              <button>Go to Testimonies 👉</button>
            </Link>
        </main>
    


          <Footer />

      </div>
    )
}