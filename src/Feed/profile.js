import React, {useEffect, useState} from "react";
import Feed from "./feed";
import NavigationSidebar from "../nav";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/ai";
import {
    getFollowersThunk,
    getFollowingThunk,
} from "../services/follow-thunks";
import {getPostThunk} from "../services/post-thunks";
import PostItem from "../post-list/post-item.js";
import {useNavigate} from "react-router";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.user);
    const {search} = useSelector((state) => state.search);
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const followers = useSelector((state) => state.follow.followers);
    const following = useSelector((state) => state.follow.following);
    const {posts} = useSelector((state) => state.posts);
    const token = useSelector((state) => state.user.token);
    let [noOfPosts, setNoOfPosts] = useState("");
    const navigate = useNavigate();

    const handleEditProfile = () => {
        setEditMode(true);
    };

    useEffect(() => {
        const load = async () => {
            if (token !== null) {
                await dispatch(getFollowingThunk(token));
                await dispatch(getFollowersThunk(token));
                await dispatch(getPostThunk(token));
                setNoOfPosts(
                    posts.filter((post) => post.postUserName === currentUser.user.username)
                        .length
                );

            } else {
                navigate("/login");
            }
        };
        load();
    }, []);

    return (
        <>
            {followers && following && posts && (
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
                                                &nbsp; &nbsp;
                                                <Link to="/users" className="profile-stat-link">
                          <span className="profile-stat">
                            {followers.length}
                          </span>
                                                    <span> followers </span>
                                                </Link>
                                                <span style={{marginLeft: "10px"}}> | </span>
                                                &nbsp; &nbsp; &nbsp;
                                                <Link to="/users" className="profile-stat-link">
                          <span className="profile-stat">
                            {following.length}
                          </span>
                                                    &nbsp;
                                                    <span>following </span>
                                                </Link>
                                                <span style={{marginLeft: "10px"}}> | </span>
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
                                                <div>
                                                    {" "}
                                                    <span style={{marginLeft: "30px", color: "gray"}}>
                            @{currentUser.user.username}
                          </span>
                                                </div>
                                            </div>
                                            <div className="profile-card-body">
                                                <div className="profile-field">
                                                    <span className="profile-label">First Name:</span>{" "}
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
                                                    <span className="profile-label">Last Name:</span>{" "}
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
                                                    <span className="profile-label">Height:</span>{" "}
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
                                                    <span className="profile-label">Weight:</span>{" "}
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
                            <div className="row justify-content-center">
                                {currentUser && (
                                    <div className="col-6 profile-posts">
                                        {posts
                                            .filter(
                                                (post) =>
                                                    post.postUserName === currentUser.user.username
                                            )
                                            .map((post) => (
                                                <li className="post-list-item" key={post.id}>
                                                    <PostItem post={post}/>
                                                </li>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Profile;
