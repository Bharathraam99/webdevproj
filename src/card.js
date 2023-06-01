import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./login.css";

async function loginUser(credentials) {
    console.log(JSON.stringify(credentials))
    return fetch('http://206.189.181.234:8087/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Card = ({ setToken }) => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        console.log(token);
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

Card.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Card;
