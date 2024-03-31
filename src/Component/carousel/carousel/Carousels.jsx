import React from 'react'
// import { BaseComponent } from 'mdb-react-ui-kit/dist/types/types/baseComponent.js'
import "./cstyle.css"
import img1 from "./slide-1.jpg"
import img2 from "./slide-2.jpg"
import img3 from "./slide-3.jpg"

export default function Carousels() {

	return (
		<>
			<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
				<div className="carousel-indicators">
					<button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">

						<img alt="..." className="d-block w-100" src={img1} />
						<div className="carousel-caption">
							<h5 className="animated bounceInRight" >CONSTRUCTOR</h5>
							<p className="animated bounceInLeft  d-md-block" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
							
						</div>
					</div>
					<div className="carousel-item">
						<img alt="..." className="d-block w-100" src={img2} />
						<div className="carousel-caption">
							<h5 className="animated bounceInRight">MARKETING</h5>
							<p className="animated bounceInLeft d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
							<p className="animated bounceInRight" >Learn More</p>
						</div>
					</div>
					<div className="carousel-item">
						<img alt="..." className="d-block w-100" src={img1} />
						<div className="carousel-caption">
							<h5 className="animated bounceInRight" >MARKETING</h5>
							<p className="animated bounceInLeft d-none d-md-block" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
							<p className="animated bounceInRight" >Learn More</p>
						</div>
					</div>
				</div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
			</div>
			{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
	</script> 
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js">
	</script> 
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js">
	</script> */}


		</>
	)
}
