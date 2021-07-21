import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowUserData from "../components/passenger/ShowUserData";
import { List } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import "../assets/css/Loader.css";

function Passenger() {
  const [pages, setPages] = useState(1);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${pages}&size=10`)
      .then((response) => {
        console.log(response);
        setShowData([...showData, ...response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pages]);
  //   const scrollToEnd = () => {
  //     setPages(pages + 1);
  //   };
  //   window.onscroll = function () {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       scrollToEnd();
  //     }
  //   };
  return (
    <InfiniteScroll
      dataLength={showData.length}
      next={() => setPages(pages + 1)}
      hasMore={true}
      loader={<div className="nature"></div>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <List
        style={{
          height: "100%",
          overflow: "auto",
        }}
      >
        {showData.length > 0 &&
          showData.map(function (items, index) {
            return <ShowUserData items={items} key={index} />;
          })}
      </List>
    </InfiniteScroll>
  );
}

export default Passenger;
