import React, { useEffect } from "react";
import PostItem from "./post-item";
import { useDispatch, useSelector } from "react-redux";
import { getPostThunk } from "../services/post-thunks";
import "./postList.css";

const PostList = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(getPostThunk(token));
  }, []);

  return (
    <ul className="list-group rounded-5 post-list">
      {posts.map((post) => {
        return (
          <li key={post.postId} className="post-list-item">
            <PostItem post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
