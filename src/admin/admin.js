import React, {useEffect, useState} from "react";
import Feed from "../Feed/feed";
import NavigationSidebar from "../nav/index.js";
import "./index.css";
import {getAllUsersThunk} from "../services/follow-thunks";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteUserThunk} from "../services/auth-thunks";

const Admin = () => {
    const {currentUser} = useSelector((state) => state.user);
    const allUsers = useSelector((state) => state.follow.allUsers);
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

    const handleEdit = (userId) => {
        setEditUsers((prevUsers) => ({
            ...prevUsers,
            [userId]: true,
        }));
        
    };

    const handleSave = (userId) => {
        // Perform save logic here
        setEditUsers((prevUsers) => ({
            ...prevUsers,
            [userId]: false,
        }));
        alert()
    };

    const handleDelete = async (userId) => {
        // Perform delete logic here
        await dispatch(deleteUserThunk({userId, token}));
        await dispatch(getAllUsersThunk(token));
    };

    const handleInputChange = (e, userId, field) => {
        const {value} = e.target;
        setEditUsers((prevUsers) => ({
            ...prevUsers,
            [userId]: {
                ...prevUsers[userId],
                [field]: value,
            },
        }));
    };

    const renderUsersList = (users) => {
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
                                        onClick={() => handleEdit(user.userId)}
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

    return (
        <>
            <div style={{backgroundColor: "#f2f2f2"}}>
                <Feed/>
                <div className="row">
                    <div className="col-2 wd-nav">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">{renderUsersList(allUsers)}</div>
                </div>
            </div>
        </>
    );
};

export default Admin;
