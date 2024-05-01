import React from 'react'

import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import Footer from '../Footer/Footer';
import Navbar3 from "../Navbar3/Navbar3"

import Modal2 from './Modal2';
import Cform from './Cform';


const Contact = () => {

  return (
    <>
      <Navbar3 />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7379905504937!2d67.18867214275399!3d24.876970359817253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1c6d30ea7%3A0x3034dc0ab3319dad!2sAhmed%20%26%20Rehman%20Builders%20%26%20Developers!5e0!3m2!1sen!2sus!4v1708529326069!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "60vh", boxshadow: "30px 30px 5px lightgrey" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {/* form */}
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-3">
              <div className="section-heading wow fadeIn" data-wow-duration="1s"
                data-wow-delay="0.5s">
                {/* <h6 style={{color: "#151515;"}}>Contact Us</h6> */}
                <h4>Get In Touch With Us <em style={{ color: "#2f769c;" }}>Now</em></h4>
                <h6>Have questions about our projects or services? Reach out to us now, and we'll respond promptly to assist you.</h6>

                <div className="line-dec" style={{ color: "#2f769c;" }}></div>
              </div>
            </div>
            <Cform />

          </div>
        </div>
      </div>
      {/*  */}


      {/*  */}
      <div className="m col-md-10 mx-auto mt-4">

      <Modal2 />
      </div>



      {/* foooter */}
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

      <Footer />


    </>
  )
}


export default Contact