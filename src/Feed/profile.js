import React, { useEffect, useState } from "react";
import Feed from "./feed";
import NavigationSidebar from "../nav";
import { useSelector } from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { search } = useSelector((state) => state.search);
  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <Feed />
        <div className="row">
          <div className="col-2 wd-nav">
            <NavigationSidebar />
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            {currentUser && (
              <div className="profile-details">
                <div className="profile-card">
                  <div className="profile-card-header">
                    <img
                      className="rounded-circle profile-picture"
                      height={108}
                      width={108}
                      src={`${currentUser.fitUser.profilePicture}`}
                      alt="Profile Picture"
                    />
                    <span className="username">
                      @{currentUser.user.username}
                    </span>
                    &nbsp; &nbsp;
                   <Link to="/users" className="profile-stat-link">
                                            <span className="profile-stat">111</span>
                                            <span> followers</span>
                                          </Link>
                                           &nbsp;   &nbsp;
                                          <Link to="/users" className="profile-stat-link">
                                            <span className="profile-stat">111</span>
                                            <span> following</span>
                                          </Link>
                                           &nbsp;   &nbsp;
                                          <span className="profile-stat">3</span>
                                          <span> posts</span>

                    {currentUser && (
                      <span className="edit-profile-button">
                        {editMode ? (
                          <button className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold">
                            Save
                          </button>
                        ) : (
                          <button
                            className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"
                            onClick={handleEditProfile}
                          >
                            Edit Profile
                          </button>
                        )}
                      </span>
                    )}
                  </div>
                  <div className="profile-card-body">
                    <div className="profile-field">
                      <span className="profile-label">FIRST NAME:</span>{" "}
                      <input
                        type="text"
                        className={`profile-input square-input ${
                          editMode ? "editable" : ""
                        }`}
                        value={currentUser.user.firstName}
                        readOnly={!editMode}
                        onChange={(e) => {
                          // Handle the change event
                        }}
                      />
                    </div>
                    <div className="profile-field">
                      <span className="profile-label">LAST NAME:</span>{" "}
                      <input
                        type="text"
                        className={`profile-input square-input ${
                          editMode ? "editable" : ""
                        }`}
                        value={currentUser.user.lastName}
                        readOnly={!editMode}
                        onChange={(e) => {
                          // Handle the change event
                        }}
                      />
                    </div>
                    <div className="profile-field">
                      <span className="profile-label">HEIGHT:</span>{" "}
                      <input
                        type="text"
                        className={`profile-input square-input ${
                          editMode ? "editable" : ""
                        }`}
                        value={`${currentUser.fitUser.height} cm`}
                        readOnly={!editMode}
                        onChange={(e) => {
                          // Handle the change event
                        }}
                      />
                    </div>
                    <div className="profile-field">
                      <span className="profile-label">WEIGHT:</span>{" "}
                      <input
                        type="text"
                        className={`profile-input square-input ${
                          editMode ? "editable" : ""
                        }`}
                        value={`${currentUser.fitUser.weight} lb`}
                        readOnly={!editMode}
                        onChange={(e) => {
                          // Handle the change event
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentUser === null && (
              <div className="profile-message">
                PLEASE LOG IN TO SEE PROFILE
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
