import React from 'react'

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import { NavLink } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import Canvas from './Canvas';
import Modal from './Modal';
function Uploading() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>

            <div className="navhead container-fluid">
                <div className="title">
                    <NavLink
                        className="navbar-brand"
                        id="brandname"
                        // to="/"
                        data-aos="flip-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500"
                    >
                        <p>Logo</p>
                        {/* <img src="glogo.png" alt="" id="wlogo" style={{ marginLeft: '10px', width: "180px", marginBottom: '15px' }} /> */}
                    </NavLink>
                </div>


                <a
                    class="btn btn-primary mb-2"
                    id="cbtn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                >
                    <img src="ham.png" alt="" sizes="" srcset="" />
                </a>

            </div>
            <div className='headupload'>
                <Sidebar />
                <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 upload">
                    <div className=" mainuplaod">
                        <div className="col-md-6 col1">


                            <button class="browsebtn my-2" style={{ width: '255px', whiteSpace: 'nowrap', padding: '5px' }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add project details</button>
                            <div className="cloud">
                                <img src="cloud.png" alt="" />
                                <h4>Drop Your Images!</h4>
                                <div className="lines my-2">
                                    {/* <div className="line1"></div>
                                Or
                                <div className="line2"></div> */}
                                </div>
                                <div className="App">
                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageRemoveAll,
                                            onImageUpdate,
                                            onImageRemove,
                                            isDragging,
                                            dragProps,
                                        }) => (
                                            <div className="upload__image-wrapper">

                                                <button type="button" class="browsebtn mt-2" onClick={onImageUpload}
                                                    {...dragProps} style={isDragging ? { color: 'red' } : null}>Browse</button>
                                                &nbsp;
                                                <button onClick={onImageRemoveAll} class="browsebtn2 " id='color2' style={{ width: '155px', whiteSpace: 'nowrap', padding: '5px' }} >Remove all images</button>

                                            </div>
                                        )}
                                    </ImageUploading>
                                    <button class="browsebtn mt-2" style={{ width: '260px', whiteSpace: 'nowrap', padding: '5px' }} >Upload Project</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col2">
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageRemove,

                                }) => (
                                    // write your building UI
                                    <div className="imgcont"  >
                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={image['data_url']} style={{ borderRadius: '5px', borderColor: 'grey' }} alt="" />
                                                <div className="image-item__btn-wrapper">
                                                    <button onClick={() => onImageRemove(index)} id="rembtn">Remove</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}


                            </ImageUploading>

                        </div>
                    </div>
                </div>
            </div>
            <Modal />
            <Canvas />
        </>
    )
}

export default Uploading
