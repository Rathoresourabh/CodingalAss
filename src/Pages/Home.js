import React from "react";
import { Typography } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

function Home() {
  function handleClick(event) {
    event.preventDefault();
    history.push("/posts");
    console.info("You clicked a breadcrumb.");
  }
  function onHandleClick(event) {
    event.preventDefault();
    history.push("/passengers");
  }
  let history = useHistory();
  return (
    <div className="main">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/posts" onClick={handleClick}>
          Posts
        </Link>
        <Link color="inherit" href="/passengers" onClick={onHandleClick}>
          Passengers
        </Link>
        <Typography color="textPrimary">Welcome To Codingal</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Home;
