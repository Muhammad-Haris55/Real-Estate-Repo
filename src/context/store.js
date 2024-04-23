import axios from "axios";
import React, { useEffect, useState } from "react";

const DataContext = React.createContext({
  data: [],
  updateContext() {},
});

export const DataContextProvider = (props) => {
  const [projData, setProjData] = useState([]);
  useEffect(() => {
    async function Call() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/viewpost`
        );
        setProjData(data.data);
      } catch (err) {
        alert(err);
      }
    }
    Call();
    return () => {};
  }, []);
  const updateContext = (updatedObj) => {
    setProjData((prevObj) => {
      return prevObj.map((obj) => {
        if (obj._id === updatedObj._id) {
          return updatedObj;
        } else {
          return obj;
        }
      });
    });
  };
  return (
    <DataContext.Provider
      value={{ data: [...projData], updateContext: updateContext }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
