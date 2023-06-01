import "./App.css";

import React, {useState} from "react";
import Card from "./card";
import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router"

const App = () => {
    const [token, setToken] = useState();
    if (!token) {
        return (
            <div className="login-outdivcard">
                <Card setToken={setToken}/>
            </div>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<Home/>}/>
                <Route path="/home/*"
                       element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
