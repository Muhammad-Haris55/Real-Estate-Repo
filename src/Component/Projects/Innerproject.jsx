import React from 'react'
import Modal from "../Modal/Modal"

function Innerproject() {
    return (
        <>
            <div className="inner">
                <div className="col-md-10 mx-auto mt-5 innerbox ">
                    <h2 className=''>GLOBE RESIDENCY Main Univerity Road Project</h2>
                    <div className="line"></div>
                </div>
                <h2 className='text-center mt-5'>About Our Project</h2>
                <div className="col-md-10 mx-auto inneritems">
                    <div className="col-md-6 cola">

                        <h5>
                            GFS introduces Villas in DHA Bahawalpur, a premium residential project on Yazman Road near Bahawalpur Airport consisting of 8 and 10 Marla Villas. This project provides residents with a stylish and safe living environment. It is the best place to buy a home because you can book one with just a 10% down payment and a 3-year payment plan.
                        </h5>
                        <button className='mt-3'

                            style={{ width: '150px', height: '35px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}
                            id="rembtn"
                        >
                            Enquire Now!
                        </button>
                    </div>

                    <div className="col-md-6 colb">
                        Embeding video!!!//Picture
                    </div>
                </div>
                <h2 className='text-center im'>IMAGES TOUR</h2>
                <div className="col-md-10 mx-auto innerimages mt-4">
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
                        {/* Launch demo modal */}
                    {/* </button> */}

                    <div className="inimage"  data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-24.webp" alt="" />
                    </div>
                    <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal">

                        <img src="https://gfsbuilders.com.pk/wp-content/uploads/2024/02/grid-NTR-1-4-1024x682.jpg" alt="" />
                    </div>
                    <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal">

                        <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-4.webp" alt="" />
                    </div>
                    <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal">

                        <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-3.webp" alt="" />
                    </div>
                    <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal">

                        <img src="https://gfsbuilders.com.pk/wp-content/uploads/2024/01/7-Winder-Enclave-1024x682.jpg" alt="" />
                    </div>
                    <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal">

                        <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/1-80.webp" alt="" />
                    </div>
                </div>

            </div >
            <Modal />
        </>
    )
}

export default Innerproject
