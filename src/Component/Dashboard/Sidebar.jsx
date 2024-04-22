import { React } from "react";
import { NavLink } from "react-router-dom";
// import AuthContext from "./context/auth";

// import 'react-toastify/dist/ReactToastify.css';

function Sidebar() {
  return (
    <>
      <div className="dcol1 col-xxl-2 col-xl-2 col-1g-2 col-md-2 ">
        <nav class="sidebar " id="side">
          <div className="sidebar-inner">
            <header class="sidebar-header"></header>

            <nav class="sidebar-menu">
              <hr />

              <p
                style={{ fontSize: "15px", paddingTop: "", marginLeft: "10px" }}
              >
                Main
              </p>
              <button type="button" id="sbutton">
                <img src="file.png" alt="" />
                <NavLink className="nav-link" to="/T">
                  <span id="spam">All Projects</span>
                </NavLink>
              </button>
              <p style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}>
                External
              </p>
              <button type="button" id="sbutton">
                <img src="upload.png" alt='pic' />
                <NavLink className="nav-link" to="/D">
                  <span id="spam">Upload Project</span>
                </NavLink>
              </button>
              <button type="button" id="sbutton">
                <img src="chat.png" alt='pic' />
                <a className="nav-link" href="/Reviews"  rel="noreferrer"  style={{textDecoration:'none'}}>
                  <span id="spam">User Reviews</span>
                </a>
              </button>

              <p style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}>
                Authentication
              </p>
              {/* <button type="button" id="sbutton">
                <img src="use.png" alt='pic'/>
                <NavLink className="nav-link" to="/Profile">
                  <span id="spam">Profile</span>
                </NavLink>
              </button> */}
              <button type="button" id="sbutton" onClick={''}>
                <img src="signout.png" alt='pic'/>

                <NavLink className="nav-link" to="/">
                  <span id="spam">Sign Out</span>
                </NavLink>
              </button>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

