import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Update() {
  const [metaData, setMetaData] = useState();
  const [detailData, setDetailData] = useState();
  const [pic, setPic] = useState();
  const [metaUpdated, setMetaUpdated] = useState({});
  const [detialUpdated, setDetailUpdated] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState(false);
  const [queryParameters] = useSearchParams();
  
  const id = queryParameters.get("id");

  useEffect(() => {
    async function apiFunction() {
      try {
        const {
          data: { meta_data, detail_data },
        } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/onepost?id=${id}`
        );
        console.log(meta_data);
        console.log(detail_data);
        setMetaData(meta_data);
        setPic(detail_data.data);
        delete detail_data.data;
        setDetailData(detail_data);
        setIsLoading(false);
        setIsData(true);
      } catch (error) {}
    }
    apiFunction();
  }, [id]);
  const addDeletePic = (id) => {
    setPic((prevPosts) => prevPosts.filter((post, index) => index !== id));
  };

  const myJSX = metaData && detailData && pic && (
    <>
      <div>
        <h1 >Title: {metaData.title}</h1>
        <img
          src={metaData.data_url}
          alt={metaData.title}
          width={"300px"}
          height={"180px"}
        />
        <p>Description: {metaData.description}</p>
      </div>
      <div>
        <h6>Bedroom: {detailData.bedroom}</h6>
        <h6>Washroom: {detailData.washroom}</h6>
        <h6>Area: {detailData.area}</h6>
        <h6>Price: {detailData.price}</h6>
      </div>
      <div>
        {pic.map((img, ind) => {
          return (
            <>
              <img
                key={ind}
                id={ind}
                src={img.data_url}
                alt={metaData.title}
                width={"300px"}
                height={"180px"}
                style={{ padding: "5px", border: "2px solid black" }}
              />
              <button
                onClick={() => {
                  addDeletePic(ind);
                }}
              >
                {" "}
                Delete{" "}
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
      {isLoading ? <h1>Data is Loading</h1> : isData && myJSX}
    </div>
  );
}

export default Update;
