import Card from "@mui/material/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyOrders = () => {
    const userId = JSON.parse(localStorage.getItem('user'))._id
    const token = localStorage.getItem('token')

    const [orders, setOrders] = useState([])
    useEffect(() => {

        const fetchMyOrder = async () => {
            try {
                const res = await axios.get(`https://nestmart-6fkh.onrender.com/api/myorders/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setOrders(res.data.orderData)
            } catch (error) {
                console.log(error.message)
            }

        }
        fetchMyOrder()
    }, [])



    return (

        <>
            <div
                className="container-fluid py-4"
                style={{ background: "#f5f5f5", minHeight: "100vh" }}
            >

                <div className="container">

                    <h3 className="fw-bold mb-4">
                        My Orders
                    </h3>
                    {
                        orders.length > 0 ?
                            <>
                                {
                                    orders.map((order) => (

                                        <div
                                            key={order._id}
                                            className="bg-white border rounded mb-3 p-4"
                                        >
                                            {
                                                order.products.map((item, index) => (

                                                    <div className="row align-items-center" key={index}>

                                                        {/* Product Image */}
                                                        <div className="col-md-2 text-center">
                                                            {console.log(item)
                                                            }                                                            <img
                                                                src={item?.images[0] || ""}
                                                                alt=""
                                                                className="img-fluid"
                                                                style={{
                                                                    width: "90px",
                                                                    height: "90px",
                                                                    objectFit: "contain"
                                                                }}
                                                            />

                                                        </div>

                                                        {/* Product Name */}
                                                        <div className="col-md-5">

                                                            <h5
                                                                className="mb-0"
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "500"
                                                                }}
                                                            >
                                                                {item.productName}
                                                            </h5>

                                                        </div>

                                                        {/* Price */}
                                                        <div className="col-md-2">

                                                            <h5 className="fw-bold">
                                                                ₹{item.price}
                                                            </h5>

                                                        </div>

                                                        {/* Delivery Status */}
                                                        <div className="col-md-3">

                                                            <h5
                                                                className="fw-bold"
                                                                style={{ color: "#111" }}
                                                            >

                                                                <span
                                                                    className="me-2"
                                                                    style={{
                                                                        width: "12px",
                                                                        height: "12px",
                                                                        background: "green",
                                                                        borderRadius: "50%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                </span>

                                                                {order.status}

                                                            </h5>

                                                            <p
                                                                className="text-muted mb-2"
                                                            >
                                                                {'krege'}
                                                            </p>

                                                            <button
                                                                className="btn btn-link p-0 text-decoration-none fw-bold"
                                                                style={{
                                                                    color: "#2874f0"
                                                                }}
                                                            >
                                                                ★ Rate & Review Product
                                                            </button>

                                                        </div>

                                                    </div>
                                                ))
                                            }


                                        </div>
                                    ))
                                }
                            </> :
                            <>
                                <Link to='/shop' className="text-decoration-none">
                                    <button className='btn btn-success w-100 py-2 fw-bold'>
                                        Shoping Continue
                                    </button>
                                </Link>
                            </>
                    }


                </div>

            </div>
        </>
    );
};

export default MyOrders;