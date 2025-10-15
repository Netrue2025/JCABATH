import { Link } from "react-router-dom"
import "../styles/pages/home.css"
//imported components
import { Topnavbar } from "../components/topnavbar"

export function Home(){
    return(
        <>
        <Topnavbar />

        <h1>This is the home page</h1>
        <Link to={"/about-jca"}>
            <button>Go to About Jca 👉</button>
          </Link>

          <Link to={"/about-us"}>
            <button>Go to About Us 👉</button>
          </Link>

          <Link to={"/amazing-grace"}>
            <button>Go to Amazing Grace 👉</button>
          </Link>

          <Link to={"/children-department"}>
            <button>Go to Children Department 👉</button>
          </Link>

          <Link to={"/contact-us"}>
            <button>Go to Contacts Us 👉</button>
          </Link>

          <Link to={"/giving"}>
            <button>Go to Giving 👉</button>
          </Link>

          <Link to={"/jca-good-women"}>
            <button>Go to Jca Good Women 👉</button>
          </Link>

          <Link to={"/leadership"}>
            <button>Go to Leadership 👉</button>
          </Link>

          <Link to={"/messages"}>
            <button>Go to Messages 👉</button>
          </Link>

          <Link to={"/prayer-request"}>
            <button>Go to Prayer Request 👉</button>
          </Link>

          <Link to={"/raising-giant"}>
            <button>Go to Raising Giant 👉</button>
          </Link>

          <Link to={"/services"}>
            <button>Go to Services 👉</button>
          </Link>

          <Link to={"/testimonies"}>
            <button>Go to Testimonies 👉</button>
          </Link>

        </>
    )
}