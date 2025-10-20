import "../styles/components/location.css"
import ride from "../media/images/ride.png"

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
                <div className="location-container">
                    
                </div>
            </div>
        </div>
    )
}