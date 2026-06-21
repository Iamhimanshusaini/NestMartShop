import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function AdminDashboard() {

    const navigate = useNavigate()
    const [islogOut, setIsLogOut] = useState(true)
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem("user"))
    const [product, setProduct] = useState('')
    const [users, setUsers] = useState('')
    const [orders, setOrders] = useState('')


    const fetchData = async () => {
        try {
            const res = await axios.get(
                "https://nestmart-6fkh.onrender.com/api/admin",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProduct(res.data.productData)
            setUsers(res.data.users)
            setOrders(res.data.orders)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {

        fetchData()
    }, [])

    return (

        < div className="container-fluid bg-light min-vh-100 p-0" >
            {/* Header */}
            < div className="bg-white border-bottom "
            >

                <div className="d-flex justify-content-between align-items-center px-3 px-md-4 py-3">

                    <h2 className="fw-bold m-0">
                        Dashboard Overview
                    </h2>

                    <div className="d-flex align-items-center gap-3">

                        {/* Notification */}
                        <button
                            className="btn btn-light border d-flex align-items-center justify-content-center"
                            style={{
                                width: "60px",
                                height: "48px"
                            }}
                        >
                            🔔
                        </button>

                        {/* Profile */}
                        {
                            islogOut === true ? (
                                <div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center "
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        fontSize: "25px",
                                        fontWeight: "800",
                                        color: "white",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setIsLogOut(false)}

                                >
                                    {user.name.charAt(0)}
                                </div>
                            ) :
                                (
                                    <div style={{ cursor: "pointer" }} onClick={logOut}>
                                        LogOut
                                    </div>
                                )
                        }



                    </div>

                </div>

            </div>

            {/* Dashboard Body */}
            < div className="p-3 p-md-4" >

                {/* Cards */}
                < div className="row g-4" >

                    {/* Card 1 */}
                    < div className="col-12 col-md-6 col-xl-4" >

                        <div className="bg-white border rounded-4 p-4 h-100 fs-6">

                            <h4 className="text-secondary fw-normal">
                                Total Products
                            </h4>

                            <h1 className="fw-bold mt-4">
                                {product.length}
                            </h1>

                            <p className="text-success fw-semibold fs-6 mb-0">
                                ↑ 5.2% from last week
                            </p>

                        </div>

                    </div >

                    {/* Card 2 */}
                    < div className="col-12 col-md-6 col-xl-4" >

                        <div className="bg-white border rounded-4 p-4 h-100">

                            <h4 className="text-secondary fw-normal">
                                Total Users
                            </h4>

                            <h1 className="fw-bold mt-4">
                                {users.length}
                            </h1>

                            <p className="text-success fw-semibold fs-6 mb-0">
                                ↑ 12.1% from last month
                            </p>

                        </div>

                    </div >

                    {/* Card 3 */}
                    < div className="col-12 col-md-6 col-xl-4" >

                        <div className="bg-white border rounded-4 p-4 h-100">

                            <h4 className="text-secondary fw-normal">
                                Total Orders
                            </h4>

                            <h1 className="fw-bold mt-4">
                                {orders.length}
                            </h1>

                            <p className="text-primary fw-semibold fs-6 mb-0">
                                Steady growth
                            </p>

                        </div>

                    </div >

                </div >

                {/* Chart Section */}
                < div
                    className="bg-white border rounded-4 mt-4 d-flex align-items-center justify-content-center"
                    style={{
                        minHeight: "420px"
                    }
                    }
                >

                    <h3 className="text-secondary fw-normal text-center px-3">
                        [ Recent Orders Table / Sales Chart ]
                    </h3>

                </div >

            </div >

        </div >
    );
}

export default AdminDashboard;