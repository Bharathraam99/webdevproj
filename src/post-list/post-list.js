import React, {useEffect} from "react";
import PostItem from "./post-item";
 import {useDispatch, useSelector} from "react-redux";

const PostList = () => {
 const {posts} = useSelector((state) => state.posts)
  return (
   <ul className="list-group">
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
