import axios from "axios";
import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Update() {
  const [metaData, setMetaData] = useState();
  const [detailData, setDetailData] = useState();
  const [pic, setPic] = useState();
  const [delpic, setDelpic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState(false);
  const [queryParameters] = useSearchParams();
  const [apiData, setAPIData] = useState({});
  const [stat, setStat] = useState(true)
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
        })
        setStat(prev => !prev)
      } catch (error) {
        setIsData(false);
        setIsLoading(false);
        setStat(prev => !prev)
      }
    }
    apiFunction();
  }, [id]);

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

        const data = await axios.put(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/updatepost?id=${id}`,
          {
            // data: file,
            ...apiData,
            delpic: delpic,
          },
          {
            headers: {
              "Content-Type": " application/json"
            },
          }
        );
        console.log(data)
        alert("Data delivered successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("All fields and some images are required");
    }
  };
  const addDeletePic = (img, id) => {
    setDelpic(prev => {
      prev.push(img)
      return prev
    })
    setPic((prevPosts) => prevPosts.filter((post, index) => index !== id));
  };

  const myJSX = metaData && detailData && pic && (
    <>
      <div>
        <h1>Title: {metaData.title}</h1>
        <img
          src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${metaData.data_url}`}
          alt={metaData.title}
          width={"300px"}
          height={"180px"}
        />
        <p>Description: {metaData.description}</p>
      </div>
      <div>
        {pic.map((img, ind) => {

          return (
            <>
              <img
                key={ind}
                src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${img}`}
                alt={metaData.title}
                width={"300px"}
                height={"180px"}
                style={{ padding: "5px", border: "2px solid black" }}
              />
              <button
                onClick={() => {
                  addDeletePic(img, ind);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
  return (
    <div>
      <p> Update Page</p>
      {isLoading ? (
        <h1>Data is Loading</h1>
      ) : (
        isData && (
          <button
            class="browsebtn my-2"
            style={{ width: "255px", whiteSpace: "nowrap", padding: "5px" }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            View project details
          </button>
        )
      )}
      <button type="button" onClick={SendRequest}>Submit</button>
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
