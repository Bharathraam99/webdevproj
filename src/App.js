import "./App.css";

import React, {useState} from "react";
import Card from "./card";
import Home from "./home";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router"
import Search from "./Search";

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
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element={<Home/>}/>
                    <Route path="/home/*"
                           element={<Home/>}/>
                    <Route path="/search/*"
                           element={<Search/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
};

export default App;
