import { Link } from "react-router-dom";

export function Giving(){
    return(
        <>
          <h1>This is the Giving page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}