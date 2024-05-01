import React from 'react'

import phoneno from "../Contact/images-removebg-preview.png"
import email from "../Contact/images__1_-removebg-preview.png"
// import location from "../location.png"
import location from "./location.png"
import contactimg from "./1 (1).jpg"


const Cform = () => {

  return (
    <> 


<div id="contact" className="contact-us section">
                    <div className="container">
                              
                                       
                                    
                                        <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s"
                                                  data-wow-delay="0.25s">
                                                  <form id="contact" action="" method="post">
                                                            <div className="row">
                                                                      <div className="col-lg-12">
                                                                                <div className="contact-dec">
                                                                                         
                                                                                </div>
                                                                      </div>
                                                                      <div className="col-lg-5">
                                                                                <div id="map" >
                                                                                  <h2>How Can We Help You?</h2>
                                                                                  <span style={{}}>You can contact us anytime through calls or messages. You can also visit our offices easily anytime. We deliver our best professional possibilities to reply to all questions within one day during the working days
</span>
                                                                            
                                                                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7379905504937!2d67.18867214275399!3d24.876970359817253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1c6d30ea7%3A0x3034dc0ab3319dad!2sAhmed%20%26%20Rehman%20Builders%20%26%20Developers!5e0!3m2!1sen!2sus!4v1708529326069!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "80vh", boxshadow: "30px 30px 5px lightgrey" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                                                                
                                                                                                  
                                                                                </div>
                                                                      </div>
                                                                      <div className="col-lg-7">
                                                                                <div className="fill-form">
                                                                                          <div className="row">
                                                                                                    <div
                                                                                                              className="col-lg-4">
                                                                                                              <div
                                                                                                                        className="info-post">
                                                                                                                        <div
                                                                                                                                  className="icon">
                                                                                                                                  <img src={phoneno}
                                                                                                                                            alt=""/>
                                                                                                                                  <a
                                                                                                                                            href="#">010-020-0340</a>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                              className="col-lg-4">
                                                                                                              <div
                                                                                                                        className="info-post">
                                                                                                                        <div
                                                                                                                                  className="icon">
                                                                                                                                  <img src={email}
                                                                                                                                            alt=""/>
                                                                                                                                  <a
                                                                                                                                            href="#">voxengroup@email.com</a>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                              className="col-lg-4">
                                                                                                              <div
                                                                                                                        className="info-post">
                                                                                                                        <div
                                                                                                                                  className="icon">
                                                                                                                                  <img src={location}
                                                                                                                                            alt=""/>
                                                                                                                                  <a
                                                                                                                                            href="#">CM-24 Gulistan e Rafi Malir City Karachi</a>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                                  
                                                                                                    <div
                                                                                                              className="col-lg-6">
                                                                                                              <fieldset>
                                                                                                             
                                                                                                                        <input type="name"
                                                                                                                                  name="name"
                                                                                                                                  id="name"
                                                                                                                                  placeholder="Name"
                                                                                                                                  autocomplete="on"
                                                                                                                                  required/>
                                                                                                              </fieldset>
                                                                                                              <fieldset>
                                                                                                              
                                                                                                                        <input type="text"
                                                                                                                                  name="email"
                                                                                                                                  id="email"
                                                                                                                                  pattern="[^ @]*@[^ @]*"
                                                                                                                                  placeholder="Your Email"
                                                                                                                                  required=""/>
                                                                                                              </fieldset>
                                                                                                              <fieldset>
                                                                                                                        <input type="subject"
                                                                                                                                  name="subject"
                                                                                                                                  id="subject"
                                                                                                                                  placeholder="Subject"
                                                                                                                                  autocomplete="on"/>
                                                                                                              </fieldset>
                                                                                                    </div>
                                                                                                    <div
                                                                                                              className="col-lg-6">
                                                                                                              <fieldset>
                                                                                                                        <textarea name="message"
                                                                                                                                  type="text"
                                                                                                                                  classname="form-control"
                                                                                                                                  id="message"
                                                                                                                                  placeholder="Message"
                                                                                                                                  required=""></textarea>
                                                                                                              </fieldset>
                                                                                                    </div>
                                                                                                    <div
                                                                                                              className="col-lg-12">
                                                                                                              <fieldset>
                                                                                                                        <button type="submit"
                                                                                                                                  id="form-submit"
                                                                                                                                  className="main-button ">Send
                                                                                                                                  Message
                                                                                                                                  Now</button>
                                                                                                              </fieldset>
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                </form>
                                                </div>

      </div>
      </div>
      
      </>
        )
    }
    
    
export default Cform;