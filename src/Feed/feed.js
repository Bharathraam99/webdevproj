import React from "react";
import "./feeds.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";

function Feed() {

  return (
  <>
    <div className="feed-page">

      <div className="row">
             <div className="col-11 position-relative">
               <input placeholder="Search"
                      className="form-control rounded-pill ps-5"/>
               <AiOutlineSearch className="fs-3 position-absolute wd-nudge-up"/>
             </div>
             <div className="col-1">
               <GoGear className="wd-top-4 float-end fs-3 position-relative"/>
             </div>
           </div>
           <ul className="nav nav-pills mb-2 mt-2">
             <li className="nav-item">
               <a href= "./post" className="nav-link active">Feed</a>
             </li>
             <li className="nav-item">
               <a href= "./profile" className="nav-link">Profile</a>
             </li>
             <li className="nav-item">
               <a href= "./routine" className="nav-link">Routine</a>
             </li>
             <li className="nav-item">
                      <a href= "./users" className="nav-link">Users</a>
                    </li>
           </ul>
           <div className="position-relative mb-2">

           </div>


    </div>
</>
  );
};

export default Feed;
