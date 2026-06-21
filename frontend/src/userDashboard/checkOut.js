import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import axios from 'axios';

function Checkout() {

    const { card, totalPrice, removeFormCard } = useContext(CartContext);

    const [loading, setLoading] = useState(false)
    const [alertMsg, setAlerthMsg] = useState("")
    const [alertType, setAlertType] = useState('')
    const token = localStorage.getItem('token')

const user = JSON.parse(localStorage.getItem('user'));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    const orderData = {

       userId: user?._id,
        name: name,
        products: card,
        totalAmount: totalPrice,
        paymentMethod: paymentMethod,
        address: {
            email,
            phone,
            address,
            city,
            pincode
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.post('https://nestmart-6fkh.onrender.com/api/place-order',
                orderData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data.message)
            setAlerthMsg(res.data.message);
            setAlertType('success');
            // window.location.reload()
        } catch (error) {
            setAlertType('danger');

            setAlerthMsg(
                error.response?.data?.message
            );
        } finally {
            setLoading(false)
        }

    }




    return (
        <>
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
            <div className="container my-5">
                <div className="row">
                    {/* Billing Details */}
                    <div className="col-md-8">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h4>Billing Details</h4>
                            </div>

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Phone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Pincode</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="pincode"
                                                onChange={(e) => setPincode(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label>Address</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                name="address"
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="city"
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success w-100"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h4>Order Summary</h4>
                            </div>

                            <div className="card-body">
                                {

                                    card.map((item) => {
                                        return (
                                            <div key={item._id} className="d-flex justify-content-between mb-2">
                                                <span>{item.productName} × {item.quantity}</span>

                                                <span className="mb-0 text-success fw-bold">₹{item.price}</span>
                                            </div>
                                        )

                                    })
                                }

                                <hr />

                                <div className="d-flex justify-content-between">
                                    <strong>Total</strong>
                                    <strong>₹{totalPrice}</strong>
                                </div>

                                <hr />

                                <h6>Payment Method</h6>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="payment"
                                        value="COD"
                                        checked={paymentMethod === "COD"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">
                                        Cash on Delivery
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="payment"
                                        value="ONLINE"
                                        checked={paymentMethod === "ONLINE"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">
                                        Online Payment
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Checkout;