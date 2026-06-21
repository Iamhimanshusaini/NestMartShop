import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {
    const token = localStorage.getItem("token")

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(false);

    // Fetch Orders
    const getOrders = async () => {

        try {

            setLoading(true);

            const res = await axios.get(
                "https://nestmart-6fkh.onrender.com/admin/api/orders"
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setOrders(res.data.orders);

            setLoading(false);

        } catch (error) {

            console.log(error);

            setLoading(false);

        }

    };

    // Change Order Status
    const updateStatus = async (id, status) => {

        try {

            const res = await axios.put(
                `https://nestmart-6fkh.onrender.com/api/order-status/${id}`,
                { status },
                 {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Update UI
            const updatedOrders = orders.map((order) => {

                if (order._id === id) {

                    return {
                        ...order,
                        orderStatus: status
                    };

                }

                return order;

            });

            setOrders(updatedOrders);

            alert(res.data.message);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        getOrders();

    }, []);

    return (

        <div className="container py-4">

            <div className="card shadow border-0">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">
                        Orders Dashboard
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

                                            <th>Order ID</th>

                                            <th>User</th>

                                            <th>Phone</th>

                                            <th>Address</th>

                                            <th>Total</th>

                                            <th>Payment Methood</th>

                                            <th>Status</th>

                                            <th>Products</th>

                                            <th>Action</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            orders.length > 0 ?

                                                orders.map((order, index) => (

                                                    <tr key={order._id}>

                                                        <td>
                                                            {index + 1}
                                                        </td>

                                                        <td>
                                                            {order.orderId}
                                                        </td>

                                                        <td>
                                                            {order.name}
                                                        </td>

                                                        <td>
                                                            {order.address.phone}
                                                        </td>

                                                        <td>
                                                            {order.address.address}
                                                        </td>

                                                        <td>
                                                            ₹{order.totalAmount}
                                                        </td>

                                                        <td>

                                                            <span
                                                                className={`badge ${order.paymentMethod === "Paid"
                                                                    ? "bg-success"
                                                                    : "bg-danger"
                                                                    }`}
                                                                style={{ position: "static", width: "70px" }} >

                                                                {order.paymentMethod}

                                                            </span>

                                                        </td>

                                                        <td>

                                                            <span
                                                                className={`badge ${order.status === "Delivered"
                                                                    ? "bg-success"
                                                                    : order.status === "Shipped"
                                                                        ? "bg-primary"
                                                                        : "bg-warning text-dark"
                                                                    }`}
                                                                style={{ position: "static", width: "70px" }} >

                                                                {order.status}

                                                            </span>

                                                        </td>

                                                        <td>

                                                            {
                                                                order.products.map((item, i) => (

                                                                    <div
                                                                        key={i}
                                                                        className="border rounded p-2 mb-2"
                                                                    >

                                                                        <div>
                                                                            <strong>
                                                                                {item.productName}
                                                                            </strong>
                                                                        </div>

                                                                        <div>
                                                                            Qty :
                                                                            {item.quantity}
                                                                        </div>

                                                                        <div>
                                                                            ₹{item.price}
                                                                        </div>

                                                                    </div>

                                                                ))
                                                            }

                                                        </td>

                                                        <td>

                                                            <select
                                                                className="form-select"
                                                                value={order.status}
                                                                onChange={(e) =>
                                                                    updateStatus(
                                                                        order._id,
                                                                        e.target.value
                                                                    )
                                                                }
                                                            >

                                                                <option value="Pending">
                                                                    Pending
                                                                </option>

                                                                <option value="Shipped">
                                                                    Shipped
                                                                </option>

                                                                <option value="Delivered">
                                                                    Delivered
                                                                </option>

                                                                <option value="Cancelled">
                                                                    Cancelled
                                                                </option>

                                                            </select>

                                                        </td>

                                                    </tr>

                                                ))

                                                :

                                                <tr>

                                                    <td
                                                        colSpan="10"
                                                        className="text-center"
                                                    >

                                                        No Orders Found

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

export default AdminOrders;