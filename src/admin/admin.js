import React, {useEffect, useState} from "react";
import Feed from "../Feed/feed";
import NavigationSidebar from "../nav/index.js";
import "./index.css";
import {getAllUsersThunk} from "../services/follow-thunks";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {useNavigate} from "react-router-dom";
const Admin = () => {
 const { currentUser } = useSelector((state) => state.user);
const allUsers = useSelector(state => state.follow.allUsers);

    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

   useEffect(() => {
          const load = async () => {
              await dispatch(getAllUsersThunk(token))
          };
          load();
      }, []);

console.log(allUsers)
      const renderUsersList = (users) => {
      return (
      <div className="table-rounded">
    <table className="table">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.userId}>
                        <td>{user.username}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>
                          <button className="btn btn-primary rounded-pill mt-2 ps-3 pe-3 btn-sm edit">Edit</button>{" "}
                          <button className="btn btn-danger rounded-pill mt-2 ps-3 pe-3 btn-sm edit">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                );
                }
    console.log(allUsers)
  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <Feed />
        <div className="row">
          <div className="col-2 wd-nav">
            <NavigationSidebar />
          </div>
          <div className="col-1"></div>
          <div className="col-7">
            {renderUsersList(allUsers)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
