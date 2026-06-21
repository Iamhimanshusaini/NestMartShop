import React, { useEffect, useState } from 'react'
import './addToCard.css'
import { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function addToCard({ setOpenCard }) {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false)


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setIsLogin(true)
        }
    }, [])

    const { card, totalPrice, removeFormCard } = useContext(CartContext);
    //  code start for place new order 

    const [loading, setLoading] = useState(false)
    const [alertMsg, setAlerthMsg] = useState("")
    const [alertType, setAlertType] = useState('')

    const token = localStorage.getItem('token')


    return (
        <>
            <div className='cartSidebar card border-0 shadow'>
                <div className='p-3'>
                    <div className='d-flex justify-content-between'>
                        <h5 className='fw-bold mb-4'>
                            Card Products
                        </h5>
                        <button
                            className="closeBtn mb-3 fs-3"
                            style={{ background: "transparent", border: "none" }}
                            onClick={() => setOpenCard(false)}
                        >
                            ×
                        </button>
                    </div>


                    {
                        card.map((item) => (

                            <div
                                className='productItem border-bottom pb-3 mb-3'
                                key={item._id}
                            >

                                <div className='d-flex align-items-center justify-content-between'>

                                    <div className='d-flex align-items-center gap-3'>

                                        <img
                                            src={item.images[0]}
                                            alt=""
                                            className='productImg'
                                            width="60"
                                        />

                                        <div>
                                            <h6 className='mb-1 fw-bold'>
                                                {item.productName}
                                            </h6>

                                            <p className='mb-0 text-success fw-bold'>
                                                ₹{item.price}
                                            </p>
                                        </div>

                                    </div>

                                </div>



                                {/* Quantity UI */}

                                <div className='d-flex align-items-center justify-content-between mt-3'>

                                    <div className='d-flex align-items-center gap-2'>

                                        <button className='btn btn-sm btn-outline-danger'>
                                            -
                                        </button>

                                        <span className='fw-bold'>
                                            {item.quantity}
                                        </span>

                                        <button className='btn btn-sm btn-outline-success'>
                                            +
                                        </button>
                                        <span><button className='btn btn-sm btn-outline-success'
                                            onClick={() => removeFormCard(item)}>
                                            <MdDeleteOutline />

                                        </button></span>

                                    </div>

                                    <h6 className='fw-bold mb-0'>
                                        ₹{item.quantity * item.price}
                                    </h6>

                                </div>

                            </div>

                        ))
                    }

                    {/* Total */}

                    <div className='border-top pt-3 mt-4'>

                        <div className='d-flex align-items-center justify-content-between mb-3'>

                            <h5 className='fw-bold'>
                                Total
                            </h5>

                            <h5 className='fw-bold text-success'>
                                ₹{totalPrice}
                            </h5>

                        </div>
                        {
                            isLogin === true ?
                                <Link to="/checkout" className='text-decoration-none'
                                >

                                    <button className='btn btn-success w-100 py-2 fw-bold'
                                        onClick={() => setOpenCard(false)}>
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
                                                'Proceed to Checkout'
                                        }

                                    </button>
                                </Link>
                                :
                                <Link className='text-decoration-none' to='/login'>
                                    <button className='btn btn-success w-100 py-2 fw-bold'>
                                        Login
                                    </button>
                                </Link>
                        }




                    </div>


                </div>

            </div >
        </>



    )
}

export default addToCard