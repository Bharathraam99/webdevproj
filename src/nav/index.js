import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Card from "../card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMinusCircle,
  faSignIn,
  faUserPlus,
  faSignOut,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const { pathname } = useLocation();

  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks"];
  const icons = {
    home: "fa fa-home",
    explore: "fa fa-hashtag",
    notifications: "fa fa-bell",
    messages: "fa fa-envelope",
    bookmarks: "fa fa-bookmark",
  };
  const [displayCard, setDisplayCard] = useState(false);

  const handleLinkClick = () => {
    setDisplayCard(true);
  };
  return (
    <div className="navigation-sidebar">
      <Link to="/tuiter" className="list-group-item text-capitalize disabled">
        <span className="icon">
          <i className="fa-solid fa-dumbbell"></i>
        </span>
      </Link>
      {/* {links.map((link) => (
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
      ))} */}

      {!currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "login" ? "active" : ""
          }`}
          to="/login"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon className="pe-2" icon={faSignIn} />
          <span className="d-none d-xl-inline">{"login"}</span>
        </Link>
      )}
      {!currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "register" ? "active" : ""
          }`}
          to="/signup"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon className="pe-2" icon={faUserPlus} />
          <span className="d-none d-xl-inline">{"register"}</span>
        </Link>
      )}
      {currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "profile" ? "active" : ""
          }`}
          to="/profile"
        >
          <FontAwesomeIcon className="pe-2" icon={faUser} />
          <span className="d-none d-xl-inline">{"profile"}</span>
        </Link>
      )}

      {currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "logout" ? "active" : ""
          }`}
          to="/"
        >
          <FontAwesomeIcon className="pe-2" icon={faSignOut} />
          <span className="d-none d-xl-inline">{"Logout"}</span>
        </Link>
      )}

      {/* <Link
        className={`list-group-item text-capitalize ${
          active === "more" ? "active" : ""
        }`}
        to="/tuiter/more"
      >
        <FontAwesomeIcon className="pe-2" icon={faEllipsisH} />
        <span className="d-none d-xl-inline">{"more"}</span>
      </Link> */}

      {displayCard && (
        <div className="login-outdivcard">
          <Card setToken={() => setDisplayCard(false)} />
        </div>
      )}
    </div>
  );
};

export default NavigationSidebar;
