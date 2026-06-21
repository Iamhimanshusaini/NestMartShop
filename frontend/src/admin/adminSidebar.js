import React, { useState } from "react";
import { Link } from "react-router";

function AdminSidebar() {

    const [dropDown, setDropDown] = useState(false)
    const [isLogOut, setIsLogOut] = useState(false)

    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate('/login')

    }
    return (
        <>
            {/* Mobile Navbar */}
            <nav className="navbar navbar-dark bg-dark d-lg-none px-3">

                <button
                    className="btn btn-outline-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#adminSidebar"
                >
                    ☰
                </button>

                <h5 className="text-white m-0 fw-bold">
                    <Link
                        href="/admin"
                        className="text-decoration-none text-white bg-primary rounded px-4 py-3 fs-6"
                    >
                        AdminPanel
                    </Link>

                </h5>

            </nav>

            {/* Sidebar */}
            <div
                className="offcanvas-lg offcanvas-start bg-dark text-white"
                tabIndex="-1"
                id="adminSidebar"
                style={{
                    width: "260px",
                    height: "100%"
                }}
            >

                {/* Header */}
                <div
                    className="d-flex align-items-center justify-content-between border-bottom border-secondary px-4"
                    style={{
                        height: "80px"
                    }}
                >

                    <h2 className="fw-bold m-0">
                        <Link
                            to="/admin"
                            className="text-decoration-none "
                        >
                            AdminPanel
                        </Link>
                    </h2>

                    {/* Close Button Mobile */}
                    <button
                        type="button"
                        className="btn-close btn-close-white d-lg-none"
                        data-bs-dismiss="offcanvas"
                    ></button>

                </div>

                {/* Menu */}
                <div className="d-flex flex-column p-3">

                    <Link
                        href="/admin"
                        className="text-decoration-none text-white bg-primary rounded px-4 py-3 fs-6"
                    >
                        🏠 Home
                    </Link>

                    <Link
                        onClick={() => setDropDown(!dropDown)}
                        className="text-decoration-none text-white rounded px-4 py-3 fs-5 d-flex justify-content-between align-items-center"
                    >

                        <span>📦 Products</span>

                        <span>
                            {dropDown ? "▲" : "▼"}
                        </span>

                    </Link>

                    {/* Sub Menu */}
                    {
                        dropDown &&

                        <div className="ms-3 d-flex flex-column">

                            <Link
                                to="/admin/add-product"
                                className="text-decoration-none text-white-50 rounded px-4 py-2 fs-6"
                            >
                                ➕Add Product
                            </Link>

                            <Link
                                to="/admin/all-products"
                                className="text-decoration-none text-white-50 rounded px-4 py-2 fs-6"
                            >
                                📋 All Products
                            </Link>

                        </div>
                    }

                    <Link to='/admin/users'

                        className="text-decoration-none text-white rounded px-4 py-3 fs-5"
                    >
                        👥 Users
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="text-decoration-none text-white rounded px-4 py-3 fs-5"
                    >
                        🛒 Orders
                    </Link>

                    <Link
                        href="/admin/analytics"
                        className="text-decoration-none text-white rounded px-4 py-3 fs-5"
                    >
                        📊 Analytics
                    </Link>

                    <Link
                        onClick={() => setIsLogOut(!isLogOut)}
                        className="text-decoration-none text-white rounded px-4 py-3 fs-5 d-flex justify-content-between align-items-center"
                    >

                        <span>⚙️ Settings</span>

                        <span>
                            {isLogOut ? "▲" : "▼"}
                        </span>

                    </Link>

                    {/* Sub Menu */}
                    {
                        isLogOut &&

                        <div className="ms-3 d-flex flex-column">

                            <Link
                                onClick={logOut}
                                className="text-decoration-none text-white-50 rounded px-4 py-2 fs-6"
                            >
                                LogOut
                            </Link>

                            <Link
                                className="text-decoration-none text-white-50 rounded px-4 py-2 fs-6"
                            >
                                📋 All Products
                            </Link>

                        </div>
                    }

                </div>

            </div>
        </>
    );
}

export default AdminSidebar;