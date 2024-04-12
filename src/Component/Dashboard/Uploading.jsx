import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import Canvas from "./Canvas";
import Modal from "./Modal";
import axios from "axios";
function Uploading() {
  const [images, setImages] = useState([]);
  const [list, setList] = useState([]);
  const [apiData, setAPIData] = useState({});
  const maxNumber = 69;

  const onChange = (imageList) => {
    const newList = imageList.map((image) => ({ data_url: image.data_url }));
    setImages(newList);
  };
  const setState = async (
    title,
    bedroom,
    washroom,
    area,
    price,
    description
  ) => {
    setAPIData({ title, bedroom, washroom, area, price, description });
  };
  function validateFormFields(obj) {
    const requiredFields = [
      "title",
      "bedroom",
      "washroom",
      "area",
      "price",
      "description",
    ];

    for (const field of requiredFields) {
      if (!(field in obj)) {
        return false;
      }

      if (
        obj[field] === null ||
        obj[field] === undefined ||
        obj[field] === ""
      ) {
        return false;
      }
    }

    return true;
  }

  const SendRequest = async () => {
    if (validateFormFields(apiData) && images.length > 0) {
      try {
        const data = await axios.post(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/addpost`,
          {
            data: images,
            ...apiData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        setList(
          data.data.msg.map((elem) => (
            <img src={elem.data_url} alt="My images" />
          ))
        );
        alert("Data delivered successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("All fields and some images are required");
    }
  };
  return (
    <>
      <div className="navhead container-fluid">
        <div className="title">
          <NavLink
            className="navbar-brand"
            id="brandname"
            data-aos="flip-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <p>Logo</p>
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
      <div className="headupload">
        <Sidebar />
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 upload">
          <div className=" mainuplaod">
            <div className="col-md-6 col1">
              <button
                class="browsebtn my-2"
                style={{ width: "255px", whiteSpace: "nowrap", padding: "5px" }}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add project details
              </button>
              <div className="cloud">
                <img src="cloud.png" alt="" />
                <h4>Drop Your Images!</h4>
                <div className="lines my-2"></div>
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
                        <button
                          type="button"
                          class="browsebtn mt-2"
                          onClick={onImageUpload}
                          {...dragProps}
                          style={isDragging ? { color: "red" } : null}
                        >
                          Browse
                        </button>
                        &nbsp;
                        <button
                          onClick={onImageRemoveAll}
                          class="browsebtn2 "
                          id="color2"
                          style={{
                            width: "155px",
                            whiteSpace: "nowrap",
                            padding: "5px",
                          }}
                        >
                          Remove all images
                        </button>
                      </div>
                    )}
                  </ImageUploading>
                  <button
                    onClick={SendRequest}
                    class="browsebtn mt-2"
                    style={{
                      width: "260px",
                      whiteSpace: "nowrap",
                      padding: "5px",
                    }}
                  >
                    Upload Project
                  </button>
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
                {({ imageList, onImageRemove }) => (
                  <div className="imgcont">
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="image-item"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={image["data_url"]}
                          style={{ borderRadius: "5px", borderColor: "grey" }}
                          alt=""
                        />
                        <div className="image-item__btn-wrapper">
                          <button
                            onClick={() => onImageRemove(index)}
                            id="rembtn"
                          >
                            Remove
                          </button>
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
      {list.length > 0 ? list : <p>No images</p>}
      <Modal uploading={setState} />
      <Canvas />
    </>
  );
}

export default Uploading;
