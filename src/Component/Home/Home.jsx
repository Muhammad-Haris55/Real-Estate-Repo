
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styled from "styled-components";
import service1 from "./img/service1.png";
import service3 from "./img/service3.png";
import home from "./img/pixasquare-4ojhpgKpS68-unsplash.jpg"
import about from "./img/avi-werde-hHz4yrvxwlA-unsplash.jpg"
import Carousels from '../carousel/carousel/Carousels';
import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react"
import Footer from '../Footer/Footer';
import b1 from "./img/joel-filipe-RFDP7_80v5A-unsplash.jpg"
import b2 from "./img/luke-stackpoole-KjvIaa_Q5rY-unsplash.jpg"
import b3 from "./img/joshua-fuller-rLeb8DxMmik-unsplash.jpg"
import b4 from "./img/valentyn-chernetskyi-jUP7m4Svtus-unsplash.jpg"
import circle1 from "./img/circle1.png"
import truck from "./img/truck.png"
import jcb from "./img/jcb.png"
import img5 from "../carousel/carousel/slide-1.jpg"

const Home = () => {

  const data = [
    {
      image: service1,
      // background:teal,
      title: "About Us",
      description: "Welcome to ARK Builders, where we provide you with smart, innovative construction solutions for your development needs, to make sure you always get amazing returns.",
    },
    {
      image: service1,
      // background:white,
      title: "Our Mission",
      description: "Here at ARK Builders, it is our mission to provide the ultimate customer satisfaction, and help our clients acheive their dreams with the right construction solution for them.",
    },
    {
      image: service1,
      // background:teal,
      title: "Our Vision",
      description: "ARK Builders hope to complete our consumers' residential and commercial needs, and provide them with high return investment opportunities with their developments.",
    },
    {
      image: service1,
      // background:white,
      title: "Our Projects",
      description: "ARK Builders completes all of its construction with integrity and quality, to ensure the dreams of our clients never fall short.",
    },
  ];

  const TestimonialsData = [
    {
      // image : profile1,
      name: "Diane Hurst",
      nam2: "IT sourcing Manager",
      comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
      // name: "John Alendon"
    },
    {
      // image : profile2,
      name: "Damein Cochran",
      nam2: "Sales Associate",
      comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
      // name: "Natasha"
    },
    {
      // image : profile1,
      name: "Sophia-Rose Butler",
      nam2: "Medical Assistant",
      comment: " >Wow! Worth much more than I paid. This report is the real deal! Thank you!",
      // name: "Alex Hormonzi"
    },
    {
      // image : profile1,
      name: "Diane Hurst",
      nam2: "IT sourcing Manager",
      comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
      // name: "John Alendon"
    },
    {
      // image : profile2,
      name: "Damein Cochran",
      nam2: "Sales Associate",
      comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
      // name: "Natasha"
    },
    {
      // image : profile1,
      name: "Sophia-Rose Butler",
      nam2: "Medical Assistant",
      comment: "Wow! Worth much more than I paid. This report is the real deal! Thank you!",
      // name: "Alex Hormonzi"
    }
  ]




  return (
    <>

      <Carousels />
    
      {/* property type */}
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="mb-3">
                        <h6 style={{color:"black"}} className=" text-uppercase">Services</h6>
                        <h1 className="display-6" style={{fontweight:"500"}}>Pioneer Of Modern Building Company</h1>
                    </div>
                    <p className="mb-4">Welcome to our estate marketing and building services! At our core, we specialize in property management, construction, and real estate solutions.</p>
                    <a style={{background:"maroon",color:"white"}} href="" className="btn  py-md-3 px-md-5">Contact Us</a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-carrot display-1 text-primary mb-3"></i>
                        <h4>Commercial Property Management</h4>
                        <p className="mb-0">Efficient commercial property management, optimizing assets.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-apple-alt display-1 text-primary mb-3"></i>
                        <h4>Houses</h4>
                        <p className="mb-0">Exemplary house building and construction services await.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-dog display-1 text-primary mb-3"></i>
                        <h4>Plots</h4>
                        <p className="mb-0">Streamlining seamless plot sales and purchases.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-tractor display-1 text-primary mb-3"></i>
                        <h4>Real Estate, Property & Construction</h4>
                        <p className="mb-0">We deliver excellence, from property acquisition to construction.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-seedling display-1 text-primary mb-3"></i>
                        <h4>Shops & Apartments</h4>
                        <p className="mb-0">Find the perfect commercial or residential property to suit your lifestyle.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



      {/* projects */}
      <div className="project_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="project_main">
                <h1 className="services_taital">Our projects</h1>
                <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi consequatur culpa qui mollitia quam officia eos vero quos, delectus repellendus, quo consequuntur cumque omnis est illum, quia vel voluptates?</p>
                <div className="moremore_bt"><a href="#">Read More </a></div>
                {/* <div className="image_6"><img src={circle1}/></div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="images_main">
                <div className="images_left">
                  <div className="container_1">
                    <img src={b1} alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                  <div className="container_1">
                    <img src={b2} alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                </div>
                <div className="images_right">
                  <div className="container_1">
                    <img src={b3} alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                      
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                  <div className="container_1">
                    <img src={b4} alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                      
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about2*/}

      <br />
      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6 style={{ color: "black" }}> | Best Deal</h6>
                <h2 style={{ color: " rgb(167,12,24)", fontFamily: "protestStrike", fontWeight: "900" }}>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li classname="nav-item" role="presentation">

                      </li>
                      <li classname="nav-item" role="presentation">

                      </li>
                      <li className="nav-item" role="presentation">
                      </li>
                    </ul>
                  </div>
                  <div classname="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>185 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>4</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src={home} style={{ width: "100%", height: "60vh" }} alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4 style={{ fontSize: "18px", fontWeight: "700" }}>Extra Info About Property</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                            <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                          <div classNamename="icon-button">
                            <a href="property-details.html"><i className="fa fa-calendar"></i> Schedule a visit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      {/* about */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid " style={{ width: "100%", height: "70vh" }} src={about} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4" style={{ fontFamily: "protestStrike", fontWeight: "700", color: "maroon" }}>Join Us As We Bring Real Estate Visionaries To The Forefront.</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p><i className="fa fa-check text-dark me-3"></i>Explore Real Estate Trends: Stay updated with the most recent trends and developments in the real estate industry.</p>
              <p><i className="fa fa-check text-dark me-3"></i>Meet Visionaries: Connect with real estate entrepreneurs and marketing experts who are shaping the future of the field.</p>
              <p><i className="fa fa-check text-dark me-3"></i>Your Real Estate Resource: HR Talks by HR Estate and Builders is your trusted resource for all things real estate and marketing.</p>
        
              <button className="btn">About us</button>
            </div>
          </div>

        </div>
      </div>

      {/* reviews */}

      <div className="testimonials">
        <h3 h3 className="display-5 fw-bold " style={{ color: "rgb(167,12,24)", textAlign: "center", fontFamily: "protestStrike" }}>What Our Client Say About Us</h3 >
        <br />
        <div className="wrapper1">
        </div>
        <div className="carousel2" >
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 2,
              },
              546: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 4,
              },

            }}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={20}
            className="t1Carousel">
            {
              TestimonialsData.map((testimonials, i) => (
                <SwiperSlide>
                  <div className="testimonial">
                    <span>{testimonials.name}</span>
                    <span>{testimonials.nam2}</span>
                    <span>{testimonials.comment}</span>
                    <hr />
                    <span>{testimonials.name}</span>

                  </div>
                </SwiperSlide>))
            }



          </Swiper>

        </div>
      </div>

      {/* map */}
      <br />
      <br />
      <div >
        <h3 h3 className="display-5 fw-bold " style={{ color: "rgb(167,12,24)", textAlign: "center", fontFamily: "protestStrike" }}> Boasting A Superb Location</h3 >
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" style={{ textAlign: "center", fontWeight: "400" }}>A Dream Real Estate Brand Packed With Potential and Results</p>

        </div>
        <div style={{ margin: "50px" }}>
          <div className="row featurette" style={{ display: "flex", flexwrap: "wrap;", alignItems: "center", justifyContent: "center" }}>
            <div className="col-md-6 col-sm-12 order-md-3" style={{ flex: "1 0 50%;" }}> <h1 className="featurette-heading lh-1" style={{ color: "rgb(167,12,24) ", fontweight: "800", textAlign: "center", fontFamily: "protestStrike" }}>Visit us</h1>
              <p className="lead" style={{ fontsize: "18px", color: "black", textAlign: "center", fontWeight: "400" }}>
               C-23 Gulistan e Rafi, Malir City, Karachi </p>
            </div>
            <div className="col-md-5 col-sm-12 order-md-1" style={{ flex: "1 0 50%" }}>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7379905504937!2d67.18867214275399!3d24.876970359817253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1c6d30ea7%3A0x3034dc0ab3319dad!2sAhmed%20%26%20Rehman%20Builders%20%26%20Developers!5e0!3m2!1sen!2sus!4v1708529326069!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "60vh", boxshadow: "2px 2px lightgrey" }} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>


      </div>

      {/* footer */}
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




export default Home