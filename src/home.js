import React from "react";
import CreatePost from "./TrainerFeed/create-post";
import PostList from "./TrainerFeed";


const Home = () => {
    return (
        <>
            <h1>WELCOME TO HOME</h1>
            <CreatePost/>
            <PostList/>
        </>
    )
}

export default Home;