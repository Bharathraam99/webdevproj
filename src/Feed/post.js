import React from "react";// Import useHistory from React Router
import Feed from "./feed";
import NavigationSidebar from "../nav/index.js";
import NewPost from "../new-post";
import PostList from "../post-list/post-list";
const Post = () => {

  return (
   <>
   <Feed />
     <div className="row">
   <div className="col-2">
                       <NavigationSidebar />
                     </div>
                     <div className="col-1">
                                 </div>
    <div className="col-7">
      <NewPost/>
      <PostList/>
            </div>
    </div>
</>
 );
};

export default Post;