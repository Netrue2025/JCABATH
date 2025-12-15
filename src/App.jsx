import { HashRouter as Router, Routes, Route } from "react-router-dom"


// Imported Pages 
import { Home } from "./pages/home"
import { AboutJca } from "./pages/about-jca"
import { AboutUs } from "./pages/about-us"
import { AmazingGrace } from "./pages/amazing-grace"
import { ChildrenDepartment } from "./pages/children-department"
import { ContactUs } from "./pages/contact-us"
import { Giving } from "./pages/giving"
import { JcaGoodWomen } from "./pages/jca-good-women"
import { Leadership } from "./pages/leadership"
import { Messages } from "./pages/messages"
import { PrayerRequest } from "./pages/prayer-request"
import { RaisingGiant } from "./pages/raising-giant"
import { Services } from "./pages/services"
import { Testimonies } from "./pages/testimonies"
import { ScrollToTop } from "./components/scrolltotop"
import { Login } from "./pages/login"



function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-jca" element={<AboutJca />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/amazing-grace" element={<AmazingGrace />}></Route>
          <Route path="/children-department" element={<ChildrenDepartment />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/giving" element={<Giving />}></Route>
          <Route path="/jca-good-women" element={<JcaGoodWomen />}></Route>
          <Route path="/leadership" element={<Leadership />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/prayer-request" element={<PrayerRequest />}></Route>
          <Route path="/raising-giant" element={<RaisingGiant />}></Route>
          <Route path="/services" element={<Services />}></Route>
           <Route path="/login" element={<Login />}></Route>
          <Route path="/testimonies" element={<Testimonies />}></Route>
          {/* <Route path="/admin" element={<Admin />}></Route> */}
          
        </Routes>
      </Router>
    </>
  )
}
export default App
