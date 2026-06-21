import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alertMsg, setAlerthMsg] = useState("")
    const [alertType, setAlertType] = useState('')

    const onsubmitLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.post('https://nestmart-6fkh.onrender.com/api/login', { email, password })
            const token = localStorage.setItem("token", res.data.token)
            const user = localStorage.setItem('user', JSON.stringify(res.data.loginUser))
            setAlertType('success')
            setAlerthMsg(res.data.message)
            
            if (res.data.loginUser.role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/')
            }

            window.location.reload();

        } catch (error) {
            setAlertType('danger')
            console.log(error.message)
            setAlerthMsg(error.response?.data?.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center px-3">

                {/* Login Card */}

                <div
                    className="bg-white border rounded-3 shadow-sm p-4 p-md-5 w-100"
                    style={{ maxWidth: "600px" }}
                >
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
                    {/* Heading */}
                    <h1
                        className="text-center fw-bold mb-4"
                        style={{
                            color: "#1d3347",
                            fontSize: "clamp(35px, 6vw, 55px)",
                        }}
                    >
                        Login
                    </h1>

                    <form onSubmit={onsubmitLogin}>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="form-label fs-5 text-secondary">
                                Username or email address{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Enter username or email"
                                style={{ height: "50px" }}
                                value={email}

                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="form-label fs-5 text-secondary">
                                Password <span className="text-danger">*</span>
                            </label>

                            <div className="position-relative">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    className="form-control pe-5"
                                    placeholder="Enter password"
                                    style={{ height: "50px" }}
                                    value={password}
                                />

                                <button
                                    type="button"
                                    className="btn border-0 position-absolute top-50 end-0 translate-middle-y"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <FaEye size={20} />
                                    ) : (
                                        <FaEyeSlash size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember + Button */}
                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="remember"
                                />

                                <label
                                    htmlFor="remember"
                                    className="form-check-label text-secondary"
                                >
                                    Remember me
                                </label>
                            </div>

                            <button
                                onClick={() => setLoading(true)}
                                type="submit"
                                className="btn text-white px-4 py-2 fw-semibold"
                                style={{
                                    backgroundColor: "#43c07a",
                                }}
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
                                        'Login'
                                }

                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-center">
                            <a
                                href="/"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#43c07a" }}
                            >
                                Lost your password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>


    );
}

export default Login;