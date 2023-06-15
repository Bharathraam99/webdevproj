
import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Card from "../card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faMinusCircle, faSignIn, faUserPlus, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
const { pathname } = useLocation();


  const [ignore, tuiter, active] = pathname.split("/");
  const links = [ "home", "explore", "notifications", "messages", "bookmarks"];
  const icons = {

    home: "fa fa-home",
    explore: "fa fa-hashtag",
    notifications: "fa fa-bell",
    messages: "fa fa-envelope",
    bookmarks: "fa fa-bookmark",


  };

  return (
    <div className="list-group">
<Link to="/tuiter" className="list-group-item text-capitalize">
        <span className="icon">
          <i className="fa-solid fa-dumbbell"></i>
        </span>
      </Link>
      {links.map((link) => (

        <Link
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${
            active === link ? "active" : ""
          }`}
          key={link}
        >

          <span className="wd-icon">
            <i className={icons[link]}></i>
          </span>
          <span className="wd-text">{link}</span>
        </Link>

      ))}
       <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/card">
                            <FontAwesomeIcon className="pe-2" icon={faUserPlus} />
                            <span className="d-none d-xl-inline">{"register / Sign in"}</span>
                        </Link>

                  <Link className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`} to="/tuiter/more">
                                        <FontAwesomeIcon className="pe-2" icon={faEllipsisH} />
                                        <span className="d-none d-xl-inline">{"more"}</span>
                                    </Link>


    </div>
  );
};

export default NavigationSidebar;
