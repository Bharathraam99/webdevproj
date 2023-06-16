import React, {useState} from "react";
//import PropTypes from 'prop-types';
import "./login.css";
import {loginThunk} from "./services/auth-thunks";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";


const Card = (/*{setToken}*/) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');


    async function loginUser(credentials) {
        /*console.log(JSON.stringify(credentials))
        return fetch('http://206.189.181.234:8087/authenticate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())*/

    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await dispatch(loginThunk({username, password}));
            navigate("/post");
        } catch (e) {
            alert(e);
        }
        /*try {
            const token = await loginUser({
                username,
                password
            });
            //setToken(token);
            //console.log(token);
        } catch (e) {
            alert("Please enter valid username and password");
        }*/
    }

    return (
        <div className="login-innerCard">
            <h1>Strava - Share what you do !</h1>
            <input value={username} type="text" placeholder="Name"
                   onChange={(event) => setUsername(event.target.value)}/>
            <input value={password} type="password" placeholder="Password"
                   onChange={(event) => setPassword(event.target.value)}/>
            <div className="cardbuttons">
                <button className="loginbutton" onClick={handleSubmit}>Login</button>
                <button className="loginbutton">Signup</button>
            </div>
        </div>
    );
};

/*Card.propTypes = {
    setToken: PropTypes.func.isRequired
}*/

export default Card;