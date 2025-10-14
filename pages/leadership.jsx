import { Link } from "react-router-dom";

export function Leadership(){
    return(
        <>
          <h1>This is Leadership page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}