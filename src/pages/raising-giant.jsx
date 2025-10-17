import { Link } from "react-router-dom";

export function RaisingGiant(){
    return(
        <>
          <h1>This is Raising Giant  page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}