import { Link } from "react-router-dom";

export function AboutUs(){
    return(
        <>
          <h1>This is about Us page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}