import React from "react";// Import useHistory from React Router
import Feed from "./../Feed/feed";
import NavigationSidebar from "../nav/index.js";
import { useParams } from "react-router-dom";

const Details = () => {
 const { username } = useParams();
  return (
   <div style={{ backgroundColor: "#f2f2f2" }}>

     <Feed />
     <div className="row">
        <div className="col-2 wd-nav">
                            <NavigationSidebar />
                          </div>
                          <div className="col-1">
                                      </div>
         <div className="col-6">

 <h2>Username: {username}</h2>
{/* Your details content goes here */}
                 </div>
         </div>
     </div>
 );
 };
 export default Details;