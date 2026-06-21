import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [alertMsg, setAlertMsg] = useState("");
    const [alertType, setAlertType] = useState("");

    const [loading, setLoading] = useState(false);

    const onSubmitSignup = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const res = await axios.post(
                "https://nestmart-6fkh.onrender.com/api/signup",
                {
                    name,
                    email,
                    password,
                    cpassword
                }
            );

            setAlertMsg(res.data.message);
            setAlertType("success");

            console.log(res.data);

        } catch (error) {

            setAlertMsg(error.response?.data?.message || "Something went wrong");
            setAlertType("danger");

            console.log(error.message);

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">


            {/* Signup Card */}
            <div
                className="bg-white shadow rounded p-4"
                style={{ width: "100%", maxWidth: "450px" }}
            >

                <h2
                    className="text-center fw-bold mb-4"
                    style={{ color: "#1f3550" }}
                >
                    Sign Up
                </h2>

                <form onSubmit={onSubmitSignup}>
                    {/* Alert */}
                    {
                        alertMsg &&

                        <div
                            className={`alert alert-${alertType} alert-dismissible fade show position-absolute top-0 mt-3`}
                            role="alert"
                            style={{ width: "400px" }}
                        >

                            {alertMsg}

                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setAlertMsg("")}
                            >
                            </button>

                        </div>
                    }
                    {/* Name */}
                    <div className="mb-3">

                        <label className="form-label">
                            Full Name <span className="text-danger">*</span>
                        </label>

                        <div className="input-group">

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Enter full name"
                                required
                            />

                            <span className="input-group-text bg-white">
                                <FaUser />
                            </span>

                        </div>

                    </div>

                    {/* Email */}
                    <div className="mb-3">

                        <label className="form-label">
                            Email <span className="text-danger">*</span>
                        </label>

                        <div className="input-group">

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                required
                            />

                            <span className="input-group-text bg-white">
                                <FaEnvelope />
                            </span>

                        </div>

                    </div>

                    {/* Password */}
                    <div className="mb-3">

                        <label className="form-label">
                            Password <span className="text-danger">*</span>
                        </label>

                        <div className="input-group">

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                required
                            />

                            <span
                                className="input-group-text bg-white"
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword
                                        ? <FaEye />
                                        : <FaEyeSlash />
                                }
                            </span>

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div className="mb-3">

                        <label className="form-label">
                            Confirm Password <span className="text-danger">*</span>
                        </label>

                        <div className="input-group">

                            <input
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Confirm password"
                                required
                            />

                            <span className="input-group-text bg-white">
                                <FaLock />
                            </span>

                        </div>

                    </div>

                    {/* Button */}
                    <button
                        onClick={() => setAlertMsg("")}
                        type="submit"
                        disabled={loading}
                        className="btn w-100 text-white"
                        style={{ background: "#46c178" }}
                    >

                        {
                            loading == true ? (
                                <div
                                    className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
                                    style={{ zIndex: 9999 }}
                                >
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            ) :
                                'Signup'
                        }

                    </button>

                </form>

                <p className="text-center mt-3 mb-0">

                    Already have an account?
                    <Link className='text-decoration-none' to ='/login'>
                        <span
                            className="ms-1"
                            style={{ color: "#46c178", cursor: "pointer" }}
                        >
                            Login
                        </span>
                    </Link>


                </p>

            </div>

        </div>
    );
};

export default Signup;