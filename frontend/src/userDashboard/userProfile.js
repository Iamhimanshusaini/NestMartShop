import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {

    const userData =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [name, setName] = useState(userData?.name || "");

    const [email, setEmail] = useState(userData?.email || "");
    const [alertMsg, setAlerthMsg] = useState("")
    const [alertType, setAlertType] = useState('')

    const updateProfile = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.patch(`https://nestmart-6fkh.onrender.com/api/user/profile/${userData?._id}`, {
                name, email
            })
            setAlerthMsg(res.data.message)
            setAlertType('success')

            // Update localStorage

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.updatedUser)
            );

        } catch (error) {
            setAlerthMsg(error?.response?.data.message)
            setAlertType('danger')
        }
    };


    return (

        <div className="container py-5">

            <div
                className="card shadow p-4 mx-auto"
                style={{ maxWidth: "500px" }}
            >


                <h3 className="fw-bold mb-4">
                    My Profile
                </h3>
                {
                    alertMsg &&
                    <div class={`alert alert-${alertType} d-flex justify-content-space-between`} role="alert">
                        {alertMsg}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                            onClick={() => setAlerthMsg('')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <form onSubmit={updateProfile}>

                    {/* Name */}

                    <div className="mb-3">

                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />

                    </div>

                    {/* Email */}

                    <div className="mb-4">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Update Profile
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UserProfile;