import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function Users() {
    const token = localStorage.getItem("token")
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);

    // Toast
    const [toastMsg, setToastMsg] = useState("");

    const [toastMsgColor, setToastMsgColor] =
        useState("bg-success");

    // Fetch Users
    const getUsers = async () => {

        try {

            setLoading(true);

            const res = await axios.get(
                "https://nestmart-6fkh.onrender.com/admin/api/users",
                 {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setUsers(res.data.users);

            setLoading(false);

        } catch (error) {

            console.log(error);

            setLoading(false);

        }

    };

    // Delete User
    const deleteUser = async (id) => {

        try {

            const confirmDelete =
                window.confirm(
                    "Are you sure want to delete user?"
                );

            if (!confirmDelete) return;

            const res = await axios.delete(
                `https://nestmart-6fkh.onrender.com/admin/api/delete-user/${id}`,
                 {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Remove Deleted User From UI
            setUsers(
                users.filter(
                    (user) => user._id !== id
                )
            );

            // Toast
            setToastMsg(res.data.message);

            setToastMsgColor("bg-success");

        } catch (error) {

            console.log(error);

            setToastMsg("User Delete Failed");

            setToastMsgColor("bg-danger");

        }

    };

    // Auto Hide Toast
    useEffect(() => {

        if (toastMsg) {

            const timer = setTimeout(() => {

                setToastMsg("");

            }, 3000);

            return () => clearTimeout(timer);

        }

    }, [toastMsg]);

    // Load Users
    useEffect(() => {

        getUsers();

    }, []);

    return (

        <div className="container py-4">

            {/* Toast */}
            {
                toastMsg &&

                <div
                    className={`toast show align-items-center text-white ${toastMsgColor} border-0 position-fixed top-0 end-0 m-4`}
                    role="alert"
                >

                    <div className="d-flex">

                        <div className="toast-body">

                            {toastMsg}

                        </div>

                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            onClick={() =>
                                setToastMsg("")
                            }
                        ></button>

                    </div>

                </div>
            }

            <div className="card shadow border-0">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">
                        Users Management
                    </h4>

                </div>

                <div className="card-body">

                    {
                        loading ?

                            <h5>
                                Loading...
                            </h5>

                            :

                            <div className="table-responsive">

                                <table className="table table-bordered align-middle">

                                    <thead className="table-dark">

                                        <tr>

                                            <th>#</th>

                                            <th>Name</th>

                                            <th>Email</th>

                                            <th>Role</th>

                                            <th>Action</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            users.length > 0 ?

                                                users.map((user, index) => (

                                                    <tr key={user._id}>

                                                        <td>
                                                            {index + 1}
                                                        </td>

                                                        <td>
                                                            {user.name}
                                                        </td>

                                                        <td>
                                                            {user.email}
                                                        </td>

                                                        <td>

                                                            <span
                                                                className={`badge ${user.role === "admin"
                                                                    ? "bg-success"
                                                                    : "bg-primary"
                                                                    }`}
                                                            >

                                                                {user.role}

                                                            </span>

                                                        </td>

                                                        <td>

                                                            <button
                                                                onClick={() => deleteUser(user._id)}
                                                                className="btn btn-danger btn-sm"

                                                            >

                                                                Delete

                                                            </button>



                                                        </td>

                                                    </tr>

                                                ))

                                                :

                                                <tr>

                                                    <td
                                                        colSpan="5"
                                                        className="text-center"
                                                    >

                                                        No Users Found

                                                    </td>

                                                </tr>
                                        }

                                    </tbody>

                                </table>

                            </div>
                    }

                </div>

            </div>

        </div>
    );
}

export default Users;