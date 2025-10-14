import { Link } from "react-router-dom";

export function PrayerRequest(){
    return(
        <>
          <h1>This is Prayer Request page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}