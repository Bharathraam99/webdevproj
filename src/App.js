import "./App.css";
import React, {useState} from "react";
import Card from "./card";
import Home from "./home";
import Routine from "./routine-page/routine";
import Profile from "./Feed/profile";
import Users from "./Feed/users";
import {BrowserRouter} from "react-router-dom";
import Details from "./Details/details";
import {Routes, Route, Navigate} from "react-router";
//import PostList from "./TrainerFeed";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import NavigationSidebar from "./nav/index";
import postsReducer from "./reducers/posts-reducer.js";
import authReducer from "./reducers/auth-reducer.js";
import userReducer from "./reducers/userSlice";
import searchReducer from "./reducers/search-reducer.js";
import followReducer from "./reducers/follow-reducer.js"
import routineReducer from "./reducers/routine-reducer.js"
import AuthContext from "./auth-context";
import ProtectedRoute from "./protected-route";
import Post from "./Feed/post";
import Search from "./Search/search";
import Signup from "./credential/signup.js";
import NewPost from "./new-post";
import Feed from "./Feed/feed";
import LandingPage from "./landingpage/landing";


const store = configureStore({
    reducer: {
        posts: postsReducer,
        user2: userReducer,
        user: authReducer,
        search: searchReducer,
        follow: followReducer,
        routine: routineReducer
        // Add other reducers here if needed
    },
});

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
            <Route
              path={"/login"}
              element={
                <div>
                  <Card /*setToken={setToken}*/ />
                </div>
              }
            />
            <Route
              path={"/signup"}
              element={
                <div>
                  <Signup />
                </div>
              }
            />
            <Route
              path="/"
              element={
                  <LandingPage/>
              }
            />
            <Route
              path="/home/*"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/post"
              element={
                <ProtectedRoute>
                  <Post />
                </ProtectedRoute>
              }
            />
            <Route
              path="/routine"
              element={
                <ProtectedRoute>
                  <Routine />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/nav"
              element={
                <ProtectedRoute>
                  <NavigationSidebar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details/:userId"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />

                        <Route
                            path={"/newPost"}
                            element={
                                <ProtectedRoute>
                                    <NewPost/>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </AuthContext>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
