import { Link } from "react-router-dom";
import "../styles/pages/giving.css";

// Import Components
import { Topnavbar } from "../components/topnavbar";
import { Location } from "../components/location";
import { Footer } from "../components/footer";

export function Giving() {
  return (
    <div>
      {/* Top navigation bar */}
      <Topnavbar/>

      {/* Main body of Giving page */}
      <main>
        {/* Location */}
        <Location/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
