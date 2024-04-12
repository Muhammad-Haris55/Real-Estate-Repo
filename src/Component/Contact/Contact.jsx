import React from 'react'
// import { useState } from 'react';
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
// import phone from "./computer-icons-mobile-phones-telephone-call-email-png-favpng-4PSqjFg9AG8H3VzzDdbCvQeR4-2174572366-removebg-preview.png"
// import email from "./orange-email-icon-24-3954133982.png-removebg-preview.png"
import Footer from '../Footer/Footer';


const Contact = () => {
  // const [formValue, setFormValue] = useState({
  //   fname: 'Mark',
  //   lname: 'Otto',
  //   email: '',
  //   city: '',
  //   state: '',
  //   zip: '',
  // });
  // const data = [

  //   {
  //     image: email,
  //     // background:white,
  //     title: "E-Mail",
  //     description: "ark.builderz@yahoo.com",
  //   },
  //   {
  //     image: phone,
  //     // background:teal,
  //     title: "Phone",
  //     description3: " +92-330-0000521",
  //     description: "051-831878",

  //   },

  // ];

  // const onChange = (e) => {
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  // };
  return (
    <>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7379905504937!2d67.18867214275399!3d24.876970359817253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1c6d30ea7%3A0x3034dc0ab3319dad!2sAhmed%20%26%20Rehman%20Builders%20%26%20Developers!5e0!3m2!1sen!2sus!4v1708529326069!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "60vh", boxshadow: "30px 30px 5px lightgrey" }} title="myFrame" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {/* form */}
      <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{maxwidth: "500px;"}}>
                <h3 style={{color:"black"}} className=" text-uppercase">Contact Us</h3>
                <h6 className="display-9">Please Feel Free To Contact Us</h6>
            </div>
            <div className="row g-0">
                <div className="col-lg-7">
                    <div style={{background:"maroon"}} className="  h-100 p-5">
                        <form>
                            <div className="row g-3">
                                <div className="col-6">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{height: "55px;"}}/>
                                </div>
                                <div className="col-6">
                                    <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height: "55px;"}}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Subject" style={{height: "55px;"}}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-black h-100 p-5">
                        <h2 className=" mb-4" style={{color:"white"}}>Get In Touch</h2>
                        <div className="d-flex mb-4">
                            {/* <div  className=" rounded-circle d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px;",background:"black"}}>
                                <i className=" fs-4 text-white"></i>
                            </div> */}
                            <div className="ps-3">
                                <h5 className="text-white">Our Office</h5>
                                <span className="text-white">123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            {/* <div className=" rounded-circle d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px;",background:"black"}}>
                                <i className="bi bi-envelope-open fs-4 text-white"></i>
                            </div> */}
                            <div className="ps-3">
                                <h5 className="text-white">Email Us</h5>
                                <span className="text-white">info@example.com</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            {/* <div className=" rounded-circle d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px;" ,background:"black"}}>
                                <i className="bi bi-phone-vibrate fs-4 text-white"></i>
                            </div> */}
                            <div className="ps-3">
                                <h5 className="text-white">Call Us</h5>
                                <span className="text-white">+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
      <Footer/>

    </>
  )
}


export default Contact