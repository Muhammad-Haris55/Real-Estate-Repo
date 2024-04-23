import { React } from "react";

// import AuthContext from "./context/auth";

function Canvas() {
  return (
    <>
      {/* <div className="can">
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header ">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              MENU
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="content">
              <nav class="sidebar-menu">
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "",
                    marginLeft: "10px",
                  }}
                >
                  Main
                </p>
                <button type="button" id="sbutton">
                  <img src="home.png" alt="pic" />
                  <NavLink className="nav-link" to="/Dashboard">
                    <span id="spam">Dashboard</span>
                  </NavLink>
                </button>
                <p
                  style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
                >
                  Get Help
                </p>
                <button type="button" id="sbutton">
                  <img src="chat.png" alt="pic" />
                  <a className="nav-link" href="https://tawk.to/chat/65cbbfd80ff6374032cd1d4c/1hmhuapn4" target="_blank " rel="noreferrer">
                    <span id="spam">Live Chat</span>
                  </a>
                </button>
                <button type="button" id="sbutton">
                  <img src="efund.png" alt="pic" />
                  <NavLink className="nav-link" to="/Request">
                    <span id="spam">Request Refund</span>
                  </NavLink>
                </button>
                <p
                  style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
                >
                  Authentication
                </p>
                <button type="button" id="sbutton">
                  <img src="use.png" alt="pic" />
                  <NavLink className="nav-link" to="/Profile">
                    <span id="spam">Profile</span>
                  </NavLink>
                </button>
                <button type="button" id="sbutton" onClick={''}>
                  <img src="signout.png" alt="pic" />
                  <NavLink className="nav-link" to="/Profile">
                    <span id="spam">Sign Out</span>
                  </NavLink>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
       
      </a> */}
      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Button with data-bs-target
      </button> */}

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">MENU</h5>
          <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close">
            {/* <img src="cross.png" alt="" /> */}
          </button>
        </div>
        <div class="offcanvas-body">
          {/* <div className="content">
            <nav class="sidebar-menu">
              <p
                style={{
                  fontSize: "15px",
                  paddingTop: "",
                  marginLeft: "10px",
                }}
              >
                Main
              </p>
              <button type="button" id="sbutton">
                <img src="home.png" alt="pic" />
                <NavLink className="nav-link" to="/Dashboard">
                  <span id="spam">Dashboard</span>
                </NavLink>
              </button>
              <p
                style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
              >
                Get Help
              </p>
              <button type="button" id="sbutton">
                <img src="chat.png" alt="pic" />
                <a className="nav-link" href="https://tawk.to/chat/65cbbfd80ff6374032cd1d4c/1hmhuapn4" target="_blank " rel="noreferrer">
                  <span id="spam">Live Chat</span>
                </a>
              </button>
              <button type="button" id="sbutton">
                <img src="efund.png" alt="pic" />
                <NavLink className="nav-link" to="/Request">
                  <span id="spam">Request Refund</span>
                </NavLink>
              </button>
              <p
                style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
              >
                Authentication
              </p>
              <button type="button" id="sbutton">
                <img src="use.png" alt="pic" />
                <NavLink className="nav-link" to="/Profile">
                  <span id="spam">Profile</span>
                </NavLink>
              </button>
              <button type="button" id="sbutton" onClick={''}>
                <img src="signout.png" alt="pic" />
                <NavLink className="nav-link" to="/Profile">
                  <span id="spam">Sign Out</span>
                </NavLink>
              </button>
            </nav>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Canvas;
