import { Link } from "react-router-dom";

export function ContactUs(){
    return(
        <>
          <h1>This is the contact Us page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}