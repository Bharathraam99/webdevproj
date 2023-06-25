import React, { useEffect, useState } from "react";
import Feed from "../Feed/feed";
import NavigationSidebar from "../nav/index.js";
import "./index.css";
import { getAllUsersThunk } from "../services/follow-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUserThunk } from "../services/auth-thunks";

// UserTable component
const UserTable = ({ users, editUsers, handleEdit, handleSave, handleDelete, handleInputChange }) => {
  // Render the user table JSX code here
   if (!users) {
              return null; // Handle the case when users is null
          }
          return (
              <table className="table">
                  <thead>
                  <tr>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {users.map((user) => (
                      <tr key={user.userId}>
                          <td>
                              {editUsers[user.userId] ? (
                                  <input
                                      type="text"
                                      value={editUsers[user.userId]?.height || user.height}
                                      onChange={(e) =>
                                          handleInputChange(e, user.userId, "height")
                                      }
                                  />
                              ) : (
                                  user.height
                              )}
                          </td>
                          <td>
                              {editUsers[user.userId] ? (
                                  <input
                                      type="text"
                                      value={editUsers[user.userId]?.weight || user.weight}
                                      onChange={(e) =>
                                          handleInputChange(e, user.userId, "weight")
                                      }
                                  />
                              ) : (
                                  user.weight
                              )}
                          </td>
                          <td>
                              {editUsers[user.userId] ? (
                                  <input
                                      type="text"
                                      value={editUsers[user.userId]?.firstName || user.firstName}
                                      onChange={(e) =>
                                          handleInputChange(e, user.userId, "firstName")
                                      }
                                  />
                              ) : (
                                  user.firstName
                              )}
                          </td>
                          <td>
                              {editUsers[user.userId] ? (
                                  <input
                                      type="text"
                                      value={editUsers[user.userId]?.lastName || user.lastName}
                                      onChange={(e) =>
                                          handleInputChange(e, user.userId, "lastName")
                                      }
                                  />
                              ) : (
                                  user.lastName
                              )}
                          </td>
                          <td>
                              <div className="button-container">
                                  {editUsers[user.userId] ? (
                                      <button
                                          className="btn btn-primary rounded-pill mt-2 px-2 py-1 btn-sm edit"
                                          onClick={() => handleSave(user.userId)}
                                      >
                                          Save
                                      </button>
                                  ) : (
                                      <button
                                          className="btn btn-primary rounded-pill mt-2 px-2 py-1 btn-sm edit"
                                          onClick={() => handleEdit(user.firstName,user.lastName,user.userId)}
                                      >
                                          Edit
                                      </button>
                                  )}
                                  <button
                                      className="btn btn-danger rounded-pill mt-2 px-2 py-1 btn-sm delete"
                                      onClick={() => handleDelete(user.userId)}
                                  >
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
              );
};

// TrainerTable component

const TrainerTable = () => {
return(
<table className="table table-bordered">
                  <thead>
                  <tr>

                      <th>First Name</th>
                      <th>Last Name</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>
                  give first name here
                  </td>
                  <td>
                  give last name here
                  </td>
                  </tr>
                  </tbody>
                  </table>
);
};


const Admin = () => {
  const { currentUser } = useSelector((state) => state.user);
  const allUsers = useSelector((state) => state.follow.allUsers);
  const allTrainers = useSelector((state) => state.follow.allTrainers);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      await dispatch(getAllUsersThunk(token));
    };
    load();
  }, []);

  const [editUsers, setEditUsers] = useState({});
  const [editTrainers, setEditTrainers] = useState({});
  const [activeTab, setActiveTab] = useState("users");

  const handleEdit = (firstName, lastName, userId) => {
    // Perform save logic here
    if (activeTab === "users") {
      setEditUsers((prevUsers) => ({
        ...prevUsers,
        [userId]: true,
      }));
    } else if (activeTab === "trainers") {
      setEditTrainers((prevTrainers) => ({
        ...prevTrainers,
        [userId]: true,
      }));
    }
  };

  const handleSave = (userId) => {
    // Perform save logic here
    if (activeTab === "users") {
      setEditUsers((prevUsers) => ({
        ...prevUsers,
        [userId]: false,
      }));
    } else if (activeTab === "trainers") {
      setEditTrainers((prevTrainers) => ({
        ...prevTrainers,
        [userId]: false,
      }));
    }
  };

  const handleDelete = async (userId) => {
    // Perform delete logic here
    await dispatch(deleteUserThunk({ userId, token }));
    await dispatch(getAllUsersThunk(token));
  };

  const handleInputChange = (e, userId, field) => {
    const { value } = e.target;
    if (activeTab === "users") {
      setEditUsers((prevUsers) => ({
        ...prevUsers,
        [userId]: {
          ...prevUsers[userId],
          [field]: value,
        },
      }));
    } else if (activeTab === "trainers") {
      setEditTrainers((prevTrainers) => ({
        ...prevTrainers,
        [userId]: {
          ...prevTrainers[userId],
          [field]: value,
        },
      }));
    }
  };
  const handleApprove = () => {
};
  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <Feed />
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block wd-nav">
            <NavigationSidebar />
          </div>
          <div className="col-1"></div>
          <div className="col-7">
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "users" ? "active" : ""}`}
                  onClick={() => setActiveTab("users")}
                >
                  Users
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "trainers" ? "active" : ""}`}
                  onClick={() => setActiveTab("trainers")}
                >
                  Trainers
                </button>
              </li>
            </ul>
            {activeTab === "users" && (
              <UserTable
                users={allUsers}
                editUsers={editUsers}
                handleEdit={handleEdit}
                handleSave={handleSave}
                handleDelete={handleDelete}
                handleInputChange={handleInputChange}
              />
            )}
            {activeTab === "trainers" && (
              <TrainerTable

              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
