import "./App.css";

import React, {useState} from "react";
import Card from "./card";
import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router"
import PostList from "./TrainerFeed";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import postsReducer from "./TrainerFeed/reducers/posts-reducer.js"
const store = configureStore({reducer:{posts:postsReducer}})

const App = () => {
    const [token, setToken] = useState();
    /*if (!token) {
        return (
            <div className="login-outdivcard">
                <Card setToken={setToken}/>
            </div>
        )
    }*/
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<Home/>}/>
                <Route path="/home/*"
                       element={<Home/>}/>
                <Route path="/feed"
                       element={<PostList/>}/>
            </Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;
