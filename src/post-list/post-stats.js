import React, {useEffect} from "react";
import { BsChatSquare, BsHeart, BsHeartFill,BsArrowRepeat, BsShare } from "react-icons/bs";
import "./index.css";
import { FaThumbsDown } from 'react-icons/fa';
import { useDispatch , useSelector} from "react-redux";



const PostStats = ( {post} ) => {
    useEffect(() => {
        console.log("Hello" + post.upvoteCount)
    },[]);

const dispatch = useDispatch();
const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="tuit-stats">
      <div className="tuit-stat">
        <BsChatSquare className="tuit-stat-icon" />
          {/*<span className="tuit-stat-count">{post.retuits}</span>*/}
      </div>
      <div className="tuit-stat">
        <BsArrowRepeat className="tuit-stat-icon" />
          {/*<span className="tuit-stat-count">{post.replies}</span>*/}
      </div>
      {currentUser && (
      <div className="tuit-stat">
        {post.upvoteByCurrentUser ? (
                  <BsHeartFill className="tuit-stat-icon liked" />
                ) : (
                  <BsHeart className="tuit-stat-icon" />
                )}
        <span className="tuit-stat-count">{post.upvoteCount}</span>
     </div>
           )}
      <div className = "tuit-stat">
      <FaThumbsDown className="tuit-stat-icon" />
          {/*<span className="tuit-stat-count"> {post.dislikes}</span>*/}
      </div>
      <div className="tuit-stat">
        <BsShare className="tuit-stat-icon" />
      </div>

    </div>
  );
};

export default PostStats;