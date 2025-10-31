import { Topnavbar } from "../components/topnavbar"
import { Header } from "../components/header"
import vectororange from "../media/images/VectorOrange.png"
import goodwomenimage from "../media/images/goodwomen.png"
import { Location } from "../components/location"
import { Footer } from "../components/footer"
import "../styles/pages/goodwomen.css"

export function JcaGoodWomen(){
    return(
        <>
            {/* Top navigation bar section */}
            <Topnavbar />

            {/* Header section */}
            <Header tag={vectororange} tagname="MINISTRIES" tittle="JCA Good Women"/>

            {/* Main contents section */}
            <section className="j-g-w-main-section">
                <div className="g-w-image">
                    <img src={goodwomenimage} alt="Good women image" />
                </div>

           
                <div className="g-w-contents">
                    <div className="g-w-section-one">
                        <div className="section-one-head">
                            <div className="tag-container">
                                <img src={vectororange} alt="Yellow tage" />
                                <p>JCA GOOD WOMEN</p>
                            </div>
                            <h3>Vision</h3>
                        </div>
                        <p>
                            <ol>
                                <li>To build women with strong knowledge of God.</li>
                                <li>Women who are extremely valuable and
                                    extraordinary like Deborah sharpening the home,
                                    church and society for Christ.
                                </li>
                            </ol> 
                        </p>
                    </div>

                    <div className="g-w-section-two">
                        <h3>JCA Bath Good Women are:</h3>
                        <p>
                            <ol>
                                <li><span>Unique</span> - with strength and courage (Judges 4:1-5, 31)</li>
                                <li><span>Valuable</span>  - priceless (Proverbs 31:10-31)</li>
                                <li><span>Honourable</span> - (Esther 4:10, Psalms 45:9)</li>
                            </ol>
                        </p>
                    </div>
                    <h4>You’re Welcome to join us!</h4>
                </div>
            </section>

            {/* Location section  */}
            <Location />

            {/* Footer Section */}
            <Footer />

          
        </>
    )
}