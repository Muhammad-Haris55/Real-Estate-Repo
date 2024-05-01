import React from 'react'
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import Footer from '../Footer/Footer'
import Navbar3 from "../Navbar3/Navbar3"

const Login1 = () => {
  return (
    <>
    <Navbar3/>
      <div className="contact-page section" style={{ width: "90%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <br />
                <h4>| LOGIN FORM </h4>
                </div>

            </div>
            <div classame="col-lg-6">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  
                  <div className="col-lg-10">
                    <fieldset>
                      <label for="email">Email Address</label>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                    </fieldset>
                  </div>
              
                  <div className="col-lg-10">
                    <fieldset>
                      <label for="password">Password</label>
                      < input type="password" name="password" id="password" placeholder="Your Password"></input>
                    </fieldset>
                  </div>
                  <div classaNme="col-lg-6">
                    <fieldset>
                      <button type="submit" id="form-submit" classname="orange-button">login</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>


      {/* truck */}
      <div className="truck">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 jkhgkj">
              <div className="truck_img1">
                <img src={truck} alt="#" />
              </div>
            </div>
            <div className="col-md-6 hassaan">
              <div className="truck_img1">
                <img src={jcb} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer/>
     


    </>
  )
}

export default Login1