import "./App.css";

import React, {useState} from "react";
import Card from "./card";
import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router"
import PostList from "./TrainerFeed";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import postsReducer from "./reducers/posts-reducer.js"
import authReducer from "./reducers/auth-reducer";
import AuthContext from "./auth-context";
import ProtectedRoute from "./protected-route";

const store = configureStore({reducer: {posts: postsReducer, user: authReducer}})

const App = () => {
    /*const [token, setToken] = useState();
    if (!token) {
        return (
            <div className="login-outdivcard">
                <Card setToken={setToken}/>
            </div>
        )
    }*/
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AuthContext>
                    <Routes>
                        <Route path={"/login"} element={
                            <div className="login-outdivcard">
                            <Card /*setToken={setToken}*//>
                        </div>}/>
                        <Route path="/"
                               element={
                                   <ProtectedRoute>
                                       <Home/>
                                   </ProtectedRoute>
                               }/>
                        <Route path="/home/*"
                               element={
                                   <ProtectedRoute>
                                       <Home/>
                                   </ProtectedRoute>}/>
                        <Route path="/feed"
                               element={
                                   <ProtectedRoute>
                                       <PostList/>
                                   </ProtectedRoute>
                               }/>
                    </Routes>
                </AuthContext>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
