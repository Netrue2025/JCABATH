import { Link } from "react-router-dom";

export function Messages(){
    return(
        <>
          <h1>This is the Messages page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}