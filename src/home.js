import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div>
        <h1>WELCOME TO HOME</h1>
        <Link to={"/search"}>SEARCH EXERCISES</Link>
      </div>

  )
}

export default Home;