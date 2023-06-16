import React, {useEffect} from "react";
import PostItem from "./post-item";
import {useDispatch, useSelector} from "react-redux";
import {getPostThunk} from "../services/post-thunks";

const PostList = () => {
    const {posts} = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    useEffect(() => {
        dispatch(getPostThunk(token));
    }, [])
    return (
        <ul className="list-group rounded-5">
            {
                posts.map(post => {
                    return <PostItem
                        key={post.postId} post={post}/>
                })
            }
        </ul>

    );
};

export default PostList;
