import React, { useState, useRef } from "react";
import "../login.css";

const Signup = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-innerCard">
      <h1>Signup</h1>
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select> */}
      <input
        value={firstname}
        type="text"
        placeholder="First Name"
        onChange={(event) => setFirstname(event.target.value)}
      />
      <input
        value={lastname}
        type="text"
        placeholder="Last Name"
        onChange={(event) => setLastname(event.target.value)}
      />
      <input
        value={height}
        type="number"
        placeholder="Height (in cm)"
        onChange={(event) => setHeight(event.target.value)}
      />
      <input
        value={weight}
        type="number"
        placeholder="Weight (in kg)"
        onChange={(event) => setWeight(event.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleProfilePictureChange}
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the default file input
      />
      <button className="profilepic" onClick={handleBrowseClick}>
        Choose Profile Picture
      </button>
      {profilePicture && <span>{profilePicture.name}</span>}

      <div className="cardbuttons">
        <button className="loginbutton" onClick={handleSubmit}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
