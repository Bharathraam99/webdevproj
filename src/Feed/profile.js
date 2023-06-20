import React, { useEffect, useState } from "react";
import Feed from "./feed";
import NavigationSidebar from "../nav";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {getFollowersThunk, getFollowingThunk} from "../services/follow-thunks";
import {getPostThunk} from "../services/post-thunks";

const Profile = () => {
        const {currentUser} = useSelector((state) => state.user);
        const {search} = useSelector((state) => state.search);
        const [editMode, setEditMode] = useState(false);
        const dispatch = useDispatch();
        const followers = useSelector(state => state.follow.followers);
        const following = useSelector(state => state.follow.following);
        const {posts} = useSelector((state) => state.posts)
        const token = useSelector((state) => state.user.token);
        let [noOfPosts, setNoOfPosts] = useState('');

        const handleEditProfile = () => {
            setEditMode(true);
        };

        useEffect(() => {
            const load = async () => {
                await dispatch(getFollowingThunk(token))
                await dispatch(getFollowersThunk(token));
                await dispatch(getPostThunk(token))
                setNoOfPosts((posts.filter(post => post.postUserName === currentUser.user.username)).length)
            }
            load();
        }, [])

        return (
            <>
                {followers && following && posts &&
                <div className="profile">
                    <div className="profile-container">
                        <Feed/>
                        <div className="row">
                            <div className="col-2 wd-nav">
                                <NavigationSidebar/>
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
                                                <span className="profile-stat">{followers.length}</span>
                                                <span> followers</span>
                                                &nbsp; &nbsp; &nbsp;
                                                <span className="profile-stat">{following.length}</span>
                                                &nbsp;
                                                <span>following</span>
                                                &nbsp; &nbsp; &nbsp;
                                                <span className="profile-stat">{noOfPosts}</span>
                                                &nbsp;
                                                <span>posts</span>
                                                &nbsp; &nbsp; &nbsp;
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
                }</>
        );
    }
;

export default Profile;
