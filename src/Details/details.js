import React, {useEffect, useState} from "react";// Import useHistory from React Router
import Feed from "./../Feed/feed";
import NavigationSidebar from "../nav/index.js";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getFollowers} from "../services/follow-service";
import {getFollowersThunk, getFollowingThunk} from "../services/follow-thunks";

const api = axios.create();

const Details = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user)
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    let [detail, setDetail] = useState(null);

    const load = async () => {
        const response = await api.get(`http://206.189.181.234:8087/home/profile/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setDetail(response.data);
    }

    useEffect(() => {
            load();
        }
        , [])

    const handleFollow = async (isFollowing) => {
        const data = {
            "userId": currentUser.user.id,
            "followUserId": userId,
            "isFollowing": isFollowing
        }
        const response = await api.post(`http://206.189.181.234:8087/home/updateFollow`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        await dispatch(getFollowersThunk(token))
        await dispatch(getFollowingThunk(token))
        await load();
    }

    return (
        <div style={{backgroundColor: "#f2f2f2"}}>

            <Feed/>

            {detail && <div className="row">
                <div className="col-2 wd-nav">
                    <NavigationSidebar/>
                </div>
                <div className="col-1">
                </div>
                <div className="col-6">

                    <h2>@{detail.user.username}</h2>

                    <img
                        className="rounded-circle profile-picture"
                        height={108}
                        width={108}
                        src={`${detail.fitUser.profilePicture}`}
                        alt="Profile Picture"/>

                    <div className="card-body">
                        <div className="user-info">
                            <h5 className="card-title">{detail.user.firstName} {detail.user.lastName}</h5>
                            Height: {detail.fitUser.height}
                            <br/>
                            Weight: {detail.fitUser.weight}
                            <br/>

                            {!detail.isFollowing && <button onClick={() => {
                                handleFollow(true)
                            }}>
                                FOLLOW
                            </button>}

                            {detail.isFollowing && <button onClick={() => {
                                handleFollow(false)
                            }}>
                                UNFOLLOW
                            </button>}

                        </div>
                    </div>
                </div>
            </div>}

        </div>
    );
};
export default Details;