import { Topnavbar } from "../components/topnavbar"
import { Header } from "../components/header"
import { Location } from "../components/location"
import { Footer } from "../components/footer"
import yellowtag from "../media/images/yellow-icon.png"
import { Form } from "../components/form"
import radiow from "../media/images/radiow.png"
import radiob from "../media/images/radiob.png"
import "../styles/pages/testimonies.css"
import { useEffect, useState  } from "react";

export function Testimonies(){
      const [backend, setBackend] = useState("");
      const [load, setLoad] = useState(true);
      const [error, setError] = useState("");
      const [paragraph, setParagraph] = useState("");
     
  
      useEffect(()=>{
          fetch("https://netrue.io/admin/fetchtestimony.php")
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Server lost. check your server connection")
                }
                return response.json();
            })
            .then((data)=>{
                setBackend(data)
                setLoad(false)
                
            })
            .catch((error)=>{
                setError(error.Messages)
                setLoad(false)
            })
        
        }, [])
  
  
        const alldata = Array.from(backend)

    return(
        <>
          {/* Top nav bar section */}
          <Topnavbar />

          {/* Header Section */}
          <Header tag={yellowtag} tagname="MEDIA" tittle="Testimonies" />

          {/* Main body section */}
          <section>
            <div className="testimonies">
              <div className="head-section">
                <h1>See What the Lord Has Done Cases</h1>
                <p>Real stories of transformation, impact, and divine 
                  empowerment. These testimonies reveal how lives are being changed, visions awakened,
                  and destinies ignited at JESUS CHRIST ASSEMBLY BATH. Be inspired by the mighty works of God!”
                </p>
              </div>

              <div>
                <div className="testimonies-containers">
                  {/* <div className="cont">
                    <div className="top-head">
                      <h3>Esther AJ</h3>
                      <h4>Testifier</h4>
                    </div>
                    <p>I was diagnosed with Cancer over a year
                      ago. The doctors said it might be deadly. But as Pastor called my case, I shouted Amen and checked. Behold, God
                      delivered me! The growth is gone!
                    </p>
                  </div>

                  <div className="cont">
                    <div className="top-head">
                      <h3>Anonymous</h3>
                      <h4>Testifier</h4>
                    </div>
                    <p>I was diagnosed with Cancer over a year
                      ago. The doctors said it might be deadly. But as Pastor called my case, I shouted Amen and checked.
                      Behold, God delivered me! The growth is gone!
                    </p>
                  </div> */}

                  {alldata.slice(0, 3).map((testimony, index)=>(
                    <div className="cont" key={index}>        
                      <div className="top-head">
                        <h3>{testimony.name}</h3>
                        <h4>Testifier</h4>
                      </div>
                      <p>{testimony.testimony}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="radio">
                  <img src={radiob} alt="Radio" />
                  <img src={radiow} alt="radio" />
                  <img src={radiow} alt="radio" />
                  <img src={radiow} alt="radio" />
                </div>
              </div>

            </div>
            <Form 
            formheader="Share Your Testimony"
            btntext="Submit Testimonies"
            h4one="Inspire Others"
            h4two="Glorify God"
            h4three="Build Community"
            h4four="Strengthen Your Faith"
            pone="Your story can
            encourage someone
            going through a similar
            journey."
            ptwo="Testimonies are powerful
            ways to honour what God
            has done."
            pthree="It connects us and
            reminds others they're
            not alone."
            pfour="Reflecting on your
            testimony reinforces your
            trust in God."
            />
          </section>

          {/* Location section */}
          <Location />

          {/* Footer section */}
          <Footer />
        </>
    )
}