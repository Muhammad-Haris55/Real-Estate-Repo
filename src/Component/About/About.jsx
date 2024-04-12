import React from 'react'
import Footer from '../Footer/Footer';
import img3 from "./vn09h7yi-removebg-preview.png"
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import about from"../Home/img/about.png"
import Background from "../Home/img/jared-erondu-6Fq2U47SKtE-unsplash.jpg"






export const About = () => {
  return (
    <>
    {/* <Navbar3/> */}
    <div className="container-fluid  py-5 bg-hero mb-5" style={{padding: "20px",backgroundImage:`url(${Background})`}}>
    <div className="container py-5">
      <div className="row justify-content-start">
        <div className="col-lg-8 text-center text-lg-start">
          <br/>
          <h1 style={{color: "#151515;"}} className="display-4  mb-md-4">About Us</h1>
          <h6 style={{backgroundcolor: "#2f769c;"}} className="btn  py-md-3 px-md-5 me-3">Home</h6>
          <h6 style={{backgroundcolor:"azure;"}}  className="btn  py-md-3 px-md-5">Services</h6>
        </div>
      </div>
    </div>
  </div>
  

    {/* <!-- Facts Start --> */}
    {/* <div className="container-fluid  facts py-5 mb-5" style={{background:"black"}}>
        <div className="container py-5">
            <div className="row gx-5 gy-4">
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-star fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Our Experience</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-users fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Specialist</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-check fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Complete Project</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-mug-hot fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Happy Clients</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Facts End --> */}

          {/* 2nd about */}
     
          <div className="container-fluid about pt-5" style={{marginTop:"5%"}}>
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100 border border-5 border-danger pt-4">
                        <img className="img-fluid mt-auto mx-auto" src={img3} alt="img"/>
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h6 className="text-danger text-uppercase">About Us</h6>
                        <h1 className="display-5">We Produce best Builders, FarmHouse and Constructor</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                            <i className="fa fa-seedling display-1 text-secondary"></i>
                            <h4>100% Builders</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-award display-1 text-secondary"></i>
                            <h4>Award Winning</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
      
          {/* about */}
          <br />
          <br />
          <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>About Ahmed & Rehman Builders</h2>
                     <span>ARK Builders is an independent and fast-growing real estate advisory firm and construction company. We are committed to building a world-class organization on the fundamental tenets of trust, transparency & quality. ARK Builders is owned and managed by an experienced and accomplished team of professionals. They have worked across Pakistan and understand the market dynamics and trends that allow them to make the best-personalized recommendations for your real estate investments. We at ARK Builders have worked and engaged with global Pakistani Community throughout our career, therefore, it is natural to understand the inevitable demand for real estate investments and associated decision-making dilemma. Our vision to streamline this decision-making process led us in the inception of ARK Builders.!</span>
                     <a className="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="about_img">
                     <figure><img src={about} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      
     
      <div className="truck">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 jkhgkj">
              <div className="truck_img1">
                <img src={truck} alt="#" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="truck_img1 hassaan">
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
export default About