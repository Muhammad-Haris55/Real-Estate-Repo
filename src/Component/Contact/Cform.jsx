import React, { useRef } from 'react'
import phoneno from "../Contact/images-removebg-preview.png"
import email from "../Contact/images__1_-removebg-preview.png"
import location from "./location.png"
import axios from 'axios'



const Cform = () => {
  const name = useRef()
  const email1 = useRef()
  const phone = useRef()
  const desc = useRef()

  const formHandler = async () => {
    const name_ref = name.current.value
    const phone_ref = phone.current.value
    const email_ref = email1.current.value
    const desc_ref = desc.current.value
    if (!name_ref || !phone_ref || !email_ref || !desc_ref) return alert('Fill all form fields')
    try {
      await axios.post(`${process.env.REACT_APP_DEVELOPMENT_URL}/contact/addcontact`, {
        name: name_ref,
        phoneno: phone_ref,
        email: email_ref,
        desc: desc_ref
      }, {
        headers: {
          "content-type": "application/json"
        }
      })
      alert("Details Submitted")
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s"
            data-wow-delay="0.25s">
            <form id="contact" >
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
                              alt="" />
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
                              alt="" />
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
                              alt="" />
                            <a
                              href="#">CM-24 Gulistan e Rafi Malir City Karachi</a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-6">
                        {/* <fieldset> */}

                        <input type="name"
                          name="name"
                          id="name"
                          placeholder="Name"
                          autocomplete="on"
                          ref={name}
                          required />
                        {/* </fieldset> */}
                        {/* <fieldset> */}

                        <input type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email"
                          ref={email1}
                          required="" />
                        {/* </fieldset> */}
                        {/* <fieldset> */}
                        <input type="subject"
                          name="subject"
                          id="subject"
                          placeholder="Phone"
                          ref={phone}
                          autocomplete="on" />
                        {/* </fieldset> */}
                      </div>
                      <div
                        className="col-lg-6">
                        {/* <fieldset> */}
                        <textarea name="message"
                          type="text"
                          classname="form-control"
                          id="message"
                          placeholder="Message"
                          ref={desc}
                          required=""></textarea>
                        {/* </fieldset> */}
                      </div>
                      <div
                        className="col-lg-12">
                        {/* <fieldset> */}
                        <button type="button"
                        onClick={formHandler}
                          id="form-submit"
                          className="main-button ">Send
                          Message
                          Now</button>
                        {/* </fieldset> */}
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