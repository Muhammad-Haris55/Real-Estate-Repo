
// import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import Dashboard from "./Dashboard";
import Dpage1 from "./Dpage1";
import Profile from './Profile'
import Signup from "./Signup";
import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Home from "./Component/Home/Home"
import Navbar3 from "./Component/Navbar3/Navbar3"
import Scroll from "./Component/Sidescroll/Scroll"
// import Carousel from "./Component/carousel/carousel/Carousel"
import Carousel from "./Component/carousel/carousel/Carousels";
import "./index.css"
import Totalprojects from "./Component/Dashboard/Totalprojects"
import Uploading from "./Component/Dashboard/Uploading"
import Modal from "./Component/Dashboard/Modal";
// import Footer from "./Component/Footer/Footer"
function App() {
  return (
    <>
    
      {/* <Navbar3 /> */}
      <Scroll />
      {/* <Footer/> */}
      <Routes>
        
       
        <Route path="/" element={<Home />}></Route>
        <Route path="D" element={<Uploading />}></Route>
        <Route path="T" element={<Totalprojects />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="dash" element={<Dashboard />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Loginform />}></Route>
        <Route path="/Dashboard" element={<Dpage1 />}></Route>
        <Route path="/Request" element={<Dashboard />}></Route>
        <Route path="/Sample" element={<Dashboard />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/carousel" element={<Carousel />}></Route>



      </Routes>
    </>
  );
}

export default App;
