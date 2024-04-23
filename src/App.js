import { Route, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import Dashboard from "./Dashboard";
import Dpage1 from "./Dpage1";
import Profile from "./Profile";
import Signup from "./Signup";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Scroll from "./Component/Sidescroll/Scroll";
import Carousel from "./Component/carousel/carousel/Carousels";
import "./index.css";
import ClientComments from "./Component/Dashboard/ClientComments"
import Totalprojects from "./Component/Dashboard/Totalprojects";
import Uploading from "./Component/Dashboard/Uploading";
import Update from "./Component/Dashboard/Update";
import Project from "./Component/Projects/Project";
import Navbar3 from "./Component/Navbar3/Navbar3"
import Innerproject from "./Component/Projects/Innerproject";
import Userreviews from "./Component/Dashboard/Userreviews"
function App() {
  return (
    <>
      {/* <Navbar3 /> */}
      {/* <Scroll /> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="D" element={<Uploading />}></Route>
        <Route path="T" element={<Totalprojects />}></Route>
        <Route path="U" element={<Update />}></Route>
        <Route path="P" element={<Project />}></Route>
        <Route path="I" element={<Innerproject />}></Route>
        <Route path="/Comments" element={<Userreviews />}></Route>
        <Route path="/Reviews" element={<ClientComments />}></Route>
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
