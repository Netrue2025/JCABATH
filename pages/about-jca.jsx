import { Link } from "react-router-dom";

export function AboutJca(){
    return(
        <>
          <h1>This is About Jca page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}