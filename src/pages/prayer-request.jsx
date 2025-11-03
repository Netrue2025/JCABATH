import { Topnavbar } from "../components/topnavbar"
import { Header } from "../components/header"
import { Form } from "../components/form"
import { Location } from "../components/location"
import { Footer } from "../components/footer"
import yellowtag from "../media/images/yellow-icon.png"
import "../styles/pages/prayer-request.css"


export function PrayerRequest(){
    return(
        <>
        {/* Top Nav bar section */}
        <Topnavbar />

        {/* Header section */}
        <Header tag={yellowtag} tagname="CONNECT" tittle="Prayer Request"/>
        
        {/* Mainn contents */}
        <section>
          <div className="p-r-contents">
            <div className="inner-cont">
                <h1>We believe in the power of prayer. </h1>
                <p>Real Share your request, and let us 
                    join our faith with yours for answers and testimonies. “If two of you agree on earth about anything they ask, it will be done for 
                    them by my Father in heaven.” — Matthew 18:19</p>
            </div>
          </div>
        </section>

        {/* Form section */}
        <Form 
        formheader="Send Prayer Request"
        btntext="submit your prayer request"
        h4one="God Hears You"
        h4two="Prayer Changes Things"
        h4three="You're Not Alone"
        h4four="Expect Miracles"
        pone="Nothing is too small or too big for Him.
         Share your request and trust that God listens."
         ptwo="When we pray in faith, heaven responds.
        Send your request and believe for answers."
        pthree="Our prayer team stands with you.
         Together, we’ll lift your request before the Lord."
        pfour="Bring your needs to God with faith.
         He is able to do exceedingly above all you ask"
        />
        
        {/* Location section */}
        <Location />
        
        {/* Footer section */}
        <Footer />
        </>
    )
}