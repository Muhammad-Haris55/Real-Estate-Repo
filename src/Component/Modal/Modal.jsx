import React from 'react'

function Modal() {
    return (
        <>
            {/* <!-- Button trigger modal --> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-lg  modal-dialog-centered" >
                    <div class="modal-content" id='imgmodal'>
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5 mt-3" id="exampleModalLabel">GLOBE RESIDENCY</h1> */}
                            <button type="button" class="btn-close mt-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" id="modalcarousel">
                                        <div className='imgdiv'>

                                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-24.webp" alt="" tabIndex={1}/>
                                        </div>
                                    </div>
                                    <div class="carousel-item" id="modalcarousel">
                                        <div className="imgdiv">

                                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-24.webp" alt="" /> </div>
                                    </div>
                                    <div class="carousel-item" id="modalcarousel">
                                        <div className="imgdiv">

                                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-24.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" id='imgpreview'>
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" id='imgpreview' >
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
