import axios from "axios";
import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Update() {

  const [metaData, setMetaData] = useState();
  const [detailData, setDetailData] = useState();
  const [pic, setPic] = useState();
  const [titlePic, SetTitlePic] = useState();
  const [delpic, setDelpic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState(false);
  const [queryParameters] = useSearchParams();
  const [apiData, setAPIData] = useState({});
  const [stat, setStat] = useState(true);
  const id = queryParameters.get("id");

  useEffect(() => {
    async function apiFunction() {
      try {
        const {
          data: { meta_data, detail_data },
        } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/onepost?id=${id}`
        );
        setMetaData(meta_data);
        SetTitlePic(meta_data.data_url)
        setPic(detail_data.data);
        delete detail_data.data;
        setDetailData(detail_data);
        setIsLoading(false);
        setIsData(true);
        setAPIData({
          title: meta_data?.title,
          bedroom: detail_data?.bedroom,
          price: detail_data?.price,
          area: detail_data?.area,
          washroom: detail_data?.washroom,
          description: meta_data?.description,
        });
        setStat((prev) => !prev);
      } catch (error) {
        setIsData(false);
        setIsLoading(false);
        setStat((prev) => !prev);
      }
    }
    apiFunction();
  }, [id]);
  const titleSubmit = async (e) => {
    e.preventDefault();
    const fileObj = e.target.title.files[0];
    if (!fileObj) {
      alert("Please select a file")
      return
    }
    try {
      const data = await axios.put(`${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/updatetitle?id=${id}`, {
        data: fileObj
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      SetTitlePic(data.data.img.data_url)
      e.target.title.value = ''
    } catch (err) {
      console.log(err)
    }
  };
  const addImages = async (e) => {
    e.preventDefault();
    const fileObj = e.target.img.files;
    if (!fileObj) {
      alert("Please select a file")
      return
    }
    const file = Object.values(fileObj)
    try {
      const { data: { detail_data } } = await axios.put(`${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/addimage?id=${id}`, {
        data: [...file]
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      setPic(detail_data.data);
      e.target.img.value = ''
    } catch (err) {
      console.log(err)
    }
  };
  const setState = async (
    title,
    bedroom,
    washroom,
    area,
    price,
    description
  ) => {
    setMetaData({ ...metaData, title: title, description: description });
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
    if (validateFormFields(apiData)) {
      try {
        await axios.put(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/updatepost?id=${id}`,
          {
            // data: file,
            ...apiData,
            delpic: delpic,
          },
          {
            headers: {
              "Content-Type": " application/json",
            },
          }
        );
        alert("Data delivered successfully");
        setDelpic([])
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("All fields and some images are required");
    }
  };
  const addDeletePic = (img, id) => {
    setDelpic((prev) => {
      prev.push(img);
      return prev;
    });
    setPic((prevPosts) => prevPosts.filter((post, index) => index !== id));
  };

  const myJSX = metaData && detailData && pic && (
    <>
      <div id="update">
        <div>
          <div>
            <h1 className="text-center my-2 updatetitle">{metaData.title}</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="col-md-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <p id="titlep"> Title Image </p>
              <img
                src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${titlePic}`}
                alt={metaData.title}
                width={"450px"}
                height={"300px"}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  borderRadius: "10px",
                  padding: "3px",
                }}
              />
              <form onSubmit={titleSubmit} id="titleform">
                <div id="titleimagebtns">

                  <label for="file-upload2" class="custom-file-upload">
                   Change Title Image
                  </label>
                  <input id="file-upload2" type="file" name="title" />

                  <button
                    class="browsebtn my-2"
                    style={{
                      width: "135px",
                      whiteSpace: "nowrap",
                      padding: "5px",
                      borderRadius:'6px',
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                {/* <input type="file" name="title" id="title" />
                <button type="submit"> Change Title Image</button> */}

                {/* <div id="titleimagebtns">
                  <label for="file-upload" class="custom-file-upload">
                    Change Title Image
                  </label>
                  <input type="file" name="title" id="title" />
                  <button type="submit" class="browsebtn" style={{
                    width: "135px",
                    whiteSpace: "nowrap",
                    padding: "5px",
                  }}> Submit</button>
                </div> */}
              </form>
            </div>
            <div
              id="projectd"
              className="col-md-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p id="updatedesc">Project description </p>
              <p id="updatedesc2"> {metaData.description}</p>
              <div style={{ width: "100%", display: "flex", gap: "5px" }} id="btnholders">
                {isLoading ? (
                  <h1>Data is Loading</h1>
                ) : (
                  isData && (
                    <button
                      class="browsebtn my-2"
                      style={{
                        width: "235px",
                        whiteSpace: "nowrap",
                        padding: "5px",
                      }}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Update project details
                    </button>
                  )
                )}
                <form onSubmit={addImages} id="uform" >
                  {/* <div id="utitle">

                    <input className="text-center showbtn" type="file" name="img"  multiple />
                  </div> */}
                  <label for="file-upload" class="custom-file-upload">
                    Add New Images
                  </label>
                  <input id="file-upload" type="file" name="img" multiple />

                  <button
                    class="browsebtn my-2"
                    style={{
                      width: "235px",
                      whiteSpace: "nowrap",
                      padding: "5px",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <button
                  class="browsebtn my-2"
                  style={{
                    width: "235px",
                    whiteSpace: "nowrap",
                    padding: "5px",
                    fontSize: "13px",
                    borderRadius: "12px",
                  }}
                  id="rembtn"
                  onClick={SendRequest}
                >
                  Upload Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-3"
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {pic.map((img, ind) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    margin: "3px",
                  }}
                >
                  <img
                    key={ind}
                    src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${img}`}
                    alt={metaData.title}
                    width={"380px"}
                    height={"260px"}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      borderRadius: "10px",
                    }}
                  />
                  <button
                    onClick={() => {
                      addDeletePic(img, ind);
                    }}
                    style={{
                      width: "150px",
                      height: "30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                    }}
                    id="rembtn"
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
  return (
    <div>
      {/* <p> Update Page</p> */}
      {/* View Project detail (mpodal btn) */}

      {/* Submit btn */}
      {/* <button type="button" onClick={SendRequest}>Submit</button> */}
      {isLoading ? <h1>Data is Loading</h1> : isData && myJSX}
      <Modal
        uploading={setState}
        key={stat}
        data={{
          title: metaData?.title,
          bedroom: detailData?.bedroom,
          price: detailData?.price,
          area: detailData?.area,
          washroom: detailData?.washroom,
          description: metaData?.description,
        }}
      />
    </div>
  );
}

export default Update;
