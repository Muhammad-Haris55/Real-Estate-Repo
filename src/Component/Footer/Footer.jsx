import React from 'react'
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import logo from '../Navbar3/AR builder logo.png'

const Footer = () => {
  return (
    <>
           
          <MDBFooter className='text-center text-lg-start text-muted' style={{ background: "#706c61", padding: "10px", boxshadow: "10px 10px 5px black" }}>
          <section className='' style={{ color: "white" }}>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img src={logo}  style={{width:"50%",height:"20vh"}} className="me-3"  alt="" />
                   
                  <h4 className='text-uppercase fw-bold mb-4' style={{ }}>
                    Ahmed & Rehman Builders
                  </h4>
                  <p>
  
                  </p>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{  }}>Leading Real State Network</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    CM-24 Gulistan e Rafi, Malir City, Karachi
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    arbuilderndeveloper@gmail.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" />0300-0288620
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" />0315-8058848
                  </p>
                  
                  <div className='hover' style={{ color: " rgb(167,12,24)" }}>
                    <a href='' className='me-4 text-reset'>
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                   
                    <a href='' className='me-4 text-reset'>
                      <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                      <MDBIcon fab icon="instagram" />
                    </a>
                    
                  </div>
  
                </MDBCol>
  
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ color: "" }}>Our Projects</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Al-rehman garden
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Bahria town
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Soul city
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Urban city
                    </a>
                  </p>
                </MDBCol>
  
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{  }}>Quick Lines</h6>
                  
                  <p>
                    <a href='#!' className='text-reset'>
                      Contact us
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      About Company
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Our Projects
                    </a>
                  </p>
                </MDBCol>
  
  
              </MDBRow>
            </MDBContainer>
          </section>
  
          
        </MDBFooter>
        <div className='text-center p-2' style={{ backgroundColor: 'black', color: "white" }}>
            © 2021 Copyright: 
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              AR Builders & Developers
            </a>
          </div>
          </>
  )
}

export default Footer