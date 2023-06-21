
import React, { useState } from "react";
import "./feeds.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux";
import { GoGear } from "react-icons/go";
import Post from "./post";

function Feed() {
 const { currentUser } = useSelector((state) => state.user);
 const dispatch=useDispatch();
 console.log(currentUser)
 const [activeTab, setActiveTab] = useState("feed");
 const navigate = useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

   const handleSearch = (e) => {
       if (e.key === "Enter") {
         const searchQuery = e.target.value;
         navigate(`/search?query=${searchQuery}`);
       }
     };

  return (
  <>
    <div className="feed-page" style={{ backgroundColor: "#8AC7DB" }}>
      <div className="row">
             {currentUser && (<div className="col-11 position-relative">
               <input placeholder="Search"
                      className="form-control rounded-pill ps-5" onKeyDown={handleSearch}/>
               <AiOutlineSearch className="fs-3 position-absolute wd-nudge-up"/>
             </div>)}
             <div className="col-1">

             </div>
           </div>
           <ul className="nav nav-pills mb-2 mt-2 wd">
             <li className="nav-item">
               <NavLink to="/post" className="nav-link" activeClassName="active"
                                     onClick={() => handleTabClick("feed")}>Feed</NavLink>
             </li>
             <li className="nav-item">
              <NavLink to="/profile" className="nav-link" activeClassName="active"
                                     onClick={() => handleTabClick("profile")}>Profile</NavLink>
             </li>
             <li className="nav-item">
              <NavLink to="/routine" className="nav-link" activeClassName="active"
                                     onClick={() => handleTabClick("routine")}>Routine</NavLink>
             </li>
             <li className="nav-item">
                     <NavLink to="/users" className="nav-link" activeClassName="active"
                                     onClick={() => handleTabClick("users")}>Users</NavLink>
                    </li>
           </ul>
           <div className="position-relative mb-2">

           </div>


    </div>
</>
  );
};

export default Feed;
