import React, {useState} from "react";
import "./login.css";
import {loginThunk, profileThunk} from "./services/auth-thunks";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Card = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            await dispatch(loginThunk({username, password}));
            await navigate("/post");
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="login-innerCard">
            <h1>Strava - Share what you do !</h1>
            <input
                value={username}
                type="text"
                placeholder="Name"
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                value={password}
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <div className="cardbuttons">
                <button className="loginbutton" onClick={handleSubmit}>
                    Login
                </button>
            </div>
            <p className="signup-link">
                Not a member? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
};


export default Card;
