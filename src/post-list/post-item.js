import {useDispatch} from "react-redux";
import {deletePost} from "../TrainerFeed/reducers/posts-reducer";
import PostStats from "./post-stats";
import { BsXLg } from 'react-icons/bs';

import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css";
const PostItem = ({post} ) => {
 const dispatch = useDispatch();
    console.log(post)
    const deletePostHandler = (id) => {
        dispatch(deletePost(id));
    }


return(
<>
 <li className="list-group-item">
   <div className="row">
   <div className="col-auto">
          <img width={50}
               className="float-end rounded-circle"
               src={require(`../images/${post.profilePic}`)} height={48} width={48}/>
        </div>
  <div className="col-10">
    <div className="tuit-info">
      <span className="fw-bolder">{post.username}</span>
      <AiFillCheckCircle className="tuit-verified-icon" />
      <span className="text-muted">{post.username} . {post.time}</span>
    </div>
    <div>{post.text}</div>
  </div>
     <div className="col-8">
       <div>
         <button className="btn delete-button" onClick={() => deletePostHandler(post.postId)}>
           <BsXLg />
         </button>
       </div>
     </div>
     <div className="col-auto abc">
       <div className="tuit-stats-container">

         <PostStats
          key = {post._id}
          post={post}
         />
       </div>
     </div>
     </div>
</li>
</>
)
};
export default PostItem;

