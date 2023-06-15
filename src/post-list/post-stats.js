import React from "react";
import { BsChatSquare, BsHeart, BsHeartFill,BsArrowRepeat, BsShare } from "react-icons/bs";
import "./index.css";
import { FaThumbsDown } from 'react-icons/fa';
import { useDispatch } from "react-redux";



const PostStats = ( {post} ) => {

const dispatch = useDispatch();

  return (
    <div className="tuit-stats">
      <div className="tuit-stat">
        <BsChatSquare className="tuit-stat-icon" />
        <span className="tuit-stat-count">{post.retuits}</span>
      </div>
      <div className="tuit-stat">
        <BsArrowRepeat className="tuit-stat-icon" />
        <span className="tuit-stat-count">{post.replies}</span>
      </div>
      <div className="tuit-stat">
        {post.liked ? (
                  <BsHeartFill className="tuit-stat-icon liked" />
                ) : (
                  <BsHeart className="tuit-stat-icon" />
                )}
        <span className="tuit-stat-count">{post.likes}</span>
      </div>
      <div className = "tuit-stat">
      <FaThumbsDown className="tuit-stat-icon" />
      <span className="tuit-stat-count"> {post.dislikes}</span>
      </div>
      <div className="tuit-stat">
        <BsShare className="tuit-stat-icon" />
      </div>

    </div>
  );
};

export default PostStats;
