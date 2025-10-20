import "../styles/components/location.css"
import ride from "../media/images/ride.png"
import yellowicon from "../media/images/yellow-icon.png"

export function Location(){
    return(
         
        <div className="ride-location">

            <div className="ride-location-sm">
                <div className="ride-container">
                    <img src={ride} alt="Ride with us image" className="img" />
                    <div className="need-ride">
                        <h2>Need a ride?</h2>
                        <p>Contact <span>Mr Gibson (+447805064612)</span> on the Saturday before Sunday service to get a lift straight from your door!</p>
                    </div>
                </div>

                {/* Location */}
                <div className="location-container">
                    <div className="location-details">
                        <div className="icon-with-name">
                            <img src={yellowicon} alt="yellow icon" />
                            <p>Our LOCATION ADDRESS</p>
                        </div>
                        
                        <h2>St Barnabas Church, Southdown, Bath, BA2 1JU</h2>
                       
                    </div>

                    {/* Map */}
                    <div className="map">
                        <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79706.97652220106!2d-2.4770667202390757!3d51.36918257474995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487186d462b7c491%3A0xa262307e9a553c3a!2sSt%20Barnabas&#39;%20Church!5e0!3m2!1sen!2suk!4v1760965158215!5m2!1sen!2suk" 
                         className="iframe"/>
                    </div>
                </div>
            </div>
        </div>
    )
}