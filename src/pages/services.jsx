import { Link } from "react-router-dom";

export function Services(){
    return(
        <>
          <h1>This is Services page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}