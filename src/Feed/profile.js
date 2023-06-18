import React, { useEffect, useState } from "react";
import Feed from "./feed";
import NavigationSidebar from "../nav";
import { useSelector } from "react-redux";
import "./index.css";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
const handleEditProfile = () => {
    // Handle the edit profile functionality
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
                    <span className="username">@{currentUser.user.username}</span>
                    {currentUser && (
                                              <span className="edit-profile-button">
                                                <button className = "rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold" onClick={handleEditProfile}>Edit Profile</button>
                                              </span>
                                            )}
                  </div>
                  <div className="profile-card-body">
                    <div className="profile-field">
                      <span className="profile-label">FIRST NAME:</span>{" "}
                      <input
                        type="text"
                        className="profile-input"
                        value={currentUser.user.firstName}
                        readOnly
                      />
                    </div>
                    <div className="profile-field">
                      <span className="profile-label">LAST NAME:</span>{" "}
                      <input
                        type="text"
                        className="profile-input"
                        value={currentUser.user.lastName}
                        readOnly
                      />
                    </div>
                    <div className="profile-field">
                      <span className="profile-label">HEIGHT:</span>{" "}
                      <input
                        type="text"
                        className="profile-input"
                        value={`${currentUser.fitUser.height} cm`}
                        readOnly
                      />
                    </div>
                    <div className="profile-field">
                      <span className="profile-label">WEIGHT:</span>{" "}
                      <input
                        type="text"
                        className="profile-input"
                        value={`${currentUser.fitUser.weight} lb`}
                        readOnly
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
