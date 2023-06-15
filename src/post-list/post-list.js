import React, {useEffect} from "react";
import PostItem from "./post-item";
 import {useDispatch, useSelector} from "react-redux";

const PostList = () => {
 const {posts} = useSelector((state) => state.posts)
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
