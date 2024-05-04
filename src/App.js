import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import "./index.css";
import ClientComments from "./Component/Dashboard/ClientComments";
import Totalprojects from "./Component/Dashboard/Totalprojects";
import Uploading from "./Component/Dashboard/Uploading";
import Update from "./Component/Dashboard/Update";
import Project from "./Component/Projects/Project";
import Innerproject from "./Component/Projects/Innerproject";
import Userreviews from "./Component/Dashboard/Userreviews";
import PrivateRoutes from "./Component/User/PrivaateRoutes";
import Login1 from "./Component/loginform1/Login1";
import Scroll from "./Component/Sidescroll/Scroll";

function App() {
  return (
    <>
    <Scroll/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/UploadProject" element={<Uploading />}></Route>
          <Route path="/Dashboard" element={<Totalprojects />}></Route>
          <Route path="/U" element={<Update />}></Route>
          <Route path="/UserComments" element={<Userreviews />}></Route>
          <Route path="/ClientReviews" element={<ClientComments />}></Route>
        </Route>
        <Route path="Project" element={<Project />}></Route>
        <Route path="I" element={<Innerproject />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login1 />}></Route>  
      </Routes>
    </>
  );
}

export default App;
