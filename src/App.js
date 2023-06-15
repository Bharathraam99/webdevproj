import "./App.css";
import React, {useState} from "react";
import Card from "./card";
import Home from "./home";
import "./login.css";
import Post from "./Feed/post";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Feed from "./Feed/feed";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import NavigationSidebar from "./nav/index";
import postsReducer from "./TrainerFeed/reducers/posts-reducer.js"
import userReducer from "./TrainerFeed/reducers/userSlice.js"

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    // Add other reducers here if needed
  },
});

const App = () => {


     return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                                       element={<Home/>}/>
                                <Route path="/home/*"
                                       element={<Home/>}/>

                <Route path="/post" element={<Post/>} />



<Route path="/nav" element={<NavigationSidebar/>} />
</Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;
