import { Link } from "react-router-dom";

export function AmazingGrace(){
    return(
        <>
          <h1>This is Amazing Grace page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}