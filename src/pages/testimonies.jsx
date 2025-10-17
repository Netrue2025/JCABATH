import { Link } from "react-router-dom";

export function Testimonies(){
    return(
        <>
          <h1>This is Testimonies page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}