import React, {useEffect, useState} from "react";
import Feed from "./feed";
import NavigationSidebar from "../nav";
import {useSelector} from "react-redux";


const Profile = () => {
    const {currentUser} = useSelector((state) => state.user)
    return (
        <div className="profile">
            <div style={{backgroundColor: "#f2f2f2"}}>
                <Feed/>
                <div className="row">
                    <div className="col-2 wd-nav">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-6">
                        <h1>Strava - Share what you do profile!</h1>

                        {currentUser && <div>
                            <img className={"rounded-circle"} height={48} width={48}
                                 src={`${currentUser.fitUser.profilePicture}`}/>
                            <br/>
                            Username: {currentUser.user.username}
                            <br/>
                            Firstname: {currentUser.user.firstName}
                            <br/>
                            Lastname: {currentUser.user.lastName}
                            <br/>
                            Height: {currentUser.fitUser.height}
                            <br/>
                            Weight: {currentUser.fitUser.weight}
                        </div>}
                        {currentUser===null && <div>PLEASE LOG IN TO SEE PROFILE</div>}

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Profile;