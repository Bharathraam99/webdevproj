import React, {useState, useRef} from "react";
import "../login.css";
import axios from "axios";
import {useDispatch} from "react-redux";
import {registerThunk} from "../services/auth-thunks";
import {useNavigate} from "react-router";

const Signup = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [height, setHeight] = useState("");
    let [weight, setWeight] = useState("");
    let [profilePicture, setProfilePicture] = useState(null);
    const fileInputRef = useRef(null);
    const roles = ["USER", "ADMIN", "TRAINER"];
    let [selected, setSelected] = useState(roles[0]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (username === "") {
            alert("Username is required");
        } else if (password === "") {
            alert("Password is required");
        } else if (firstname === "") {
            alert("Firstname is required");
        } else if (lastname === "") {
            alert("Lastname is required");
        } else if (height === "") {
            alert("Height is required");
        } else if (weight === "") {
            alert("Weight is required");
        } else {
            let image = "";
            if (profilePicture !== null) {
                const fd = new FormData();
                fd.append('image', profilePicture, profilePicture.name);
                await axios.post("https://api.imgbb.com/1/upload?key=057c9a9ac1bb914d95dfe4a1d47f50d5", fd).then(res => {
                    image = res.data.data.display_url;
                });
            } else {
                image = "https://i.ibb.co/KWMwLkv/default.jpg";
            }
            const user = {
                "firstName": firstname,
                "lastName": lastname,
                "userName": username,
                "password": password,
                "role": selected,
                "height": height,
                "weight": weight,
                "profilePicture": image
            }
            try {
                await dispatch(registerThunk(user));
                alert("User Registered Successfully");
                navigate("/login")
            } catch (e) {
                alert(e);
            }
        }

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
                style={{display: "none"}} // Hide the default file input
            />
            <select value={selected}
                    onChange={e => setSelected(e.target.value)}>
                {roles.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>
            <button className="profilepic" onClick={handleBrowseClick}>
                Choose Profile Picture
            </button>
            {profilePicture && <span>{profilePicture.name}</span>}

            <div className="cardbuttons">
                <button type={"submit"} className="loginbutton" onClick={handleSubmit}>
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Signup;
