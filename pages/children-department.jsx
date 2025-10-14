import { Link } from "react-router-dom";

export function ChildrenDepartment(){
    return(
        <>
          <h1>This is Children Department page</h1>
          <Link to={"/"}>
            <button>👈Back Home</button>
          </Link>
          
        </>
    )
}