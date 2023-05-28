import React from "react";// Import useHistory from React Router
import "./login.css";

const Card = () => {

  return (
    <div className="login-innerCard">
      <h1>Strava - Share what you do !</h1>
      <input type="text" placeholder="Name"></input>
      <input type="password" placeholder="Password"></input>
      <div className="cardbuttons">
        <button className="loginbutton">
          Login
        </button>
        <button className="loginbutton" >Signup</button>
      </div>
    </div>
  );
};

export default Card;
