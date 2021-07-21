import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ShowPost from "../components/Posts/ShowPost";
import axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <List
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {posts.map(function (post, index) {
        return <ShowPost post={post} key ={index} />;
      })}
    </List>
  );
}

export default Post;
