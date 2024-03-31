import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from "./Sidebar"
function Totalprojects() {
    return (
        <>
            <div className="navhead container-fluid">
                <div className="title">
                    <NavLink
                        className="navbar-brand"
                        id="brandname"
                        // to="/"
                        data-aos="flip-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500"
                    >
                        <p>Logo</p>
                        {/* <img src="glogo.png" alt="" id="wlogo" style={{ marginLeft: '10px', width: "180px", marginBottom: '15px' }} /> */}
                    </NavLink>
                </div>


                <a
                    class="btn btn-primary mb-2"
                    id="cbtn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                >
                    <img src="ham.png" alt="" sizes="" srcset="" />
                </a>

            </div>
            <div className='headupload'>
            <Sidebar />
                <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 total">
                    <div className="totalcont">
                        <div className="top">

                        </div>
                        <div className="bottom">
                            <h5>NTR Industrial Zone – Phase 2</h5>
                            <p>NTR – Industrial Zone Phase 2 is a secured gated Industrial project that has a state-of-art infrastructure with all personal services…</p>

                            <button class="browsebtn2 mt-1 mb-1" id='color' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Check</button>
                            <button class="browsebtn2  mb-2" id='color2' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Upload!</button>
                        </div>
                    </div>
                    <div className="totalcont">
                        <div className="top">

                        </div>
                        <div className="bottom">
                            <h5>NTR Industrial Zone – Phase 2</h5>
                            <p>NTR – Industrial Zone Phase 2 is a secured gated Industrial project that has a state-of-art infrastructure with all personal services…</p>

                            <button class="browsebtn2 mt-1 mb-1" id='color' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Check</button>
                            <button class="browsebtn2  mb-2" id='color2' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Upload!</button>
                        </div>
                    </div>
                    <div className="totalcont">
                        <div className="top">

                        </div>
                        <div className="bottom">
                            <h5>NTR Industrial Zone – Phase 2</h5>
                            <p>NTR – Industrial Zone Phase 2 is a secured gated Industrial project that has a state-of-art infrastructure with all personal services…</p>

                            <button class="browsebtn2 mt-1 mb-1" id='color' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Check</button>
                            <button class="browsebtn2  mb-2" id='color2' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Upload!</button>
                        </div>
                    </div>
                    <div className="totalcont">
                        <div className="top">

                        </div>
                        <div className="bottom">
                            <h5>NTR Industrial Zone – Phase 2</h5>
                            <p>NTR – Industrial Zone Phase 2 is a secured gated Industrial project that has a state-of-art infrastructure with all personal services…</p>

                            <button class="browsebtn2 mt-1 mb-1" id='color' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Check</button>
                            <button class="browsebtn2  mb-2" id='color2' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Upload!</button>
                        </div>
                    </div>
                    <div className="totalcont">
                        <div className="top">

                        </div>
                        <div className="bottom">
                            <h5>NTR Industrial Zone – Phase 2</h5>
                            <p>NTR – Industrial Zone Phase 2 is a secured gated Industrial project that has a state-of-art infrastructure with all personal services…</p>

                            <button class="browsebtn2 mt-1 mb-1" id='color' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Check</button>
                            <button class="browsebtn2  mb-2" id='color2' style={{ width: '100%', whiteSpace: 'nowrap', padding: '5px' }} >Upload!</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Totalprojects
