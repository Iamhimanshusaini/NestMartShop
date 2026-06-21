import React from 'react'
import { Link } from 'react-router';
import './popularProduct.css'
import Products from '../../components/product/product.js';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
function popularProduct({ prod, addCard }) {
    return (
        <>
            <section className="mb-5">
                <div className="container-fluid">
                    <div className="container">
                        {/* <div className="row">
                        <div className="col-lg-2">
                            <h2 className='hd'>Popular Products</h2>
                        </div>
                        <div className="col-lg">
                            <ul className='filtterTab'>
                                <li className='nav-item'><Link>All</Link></li>
                                <li><Link>Milks & Dairies</Link></li>
                                <li><Link>Coffes & Teas</Link></li>
                                <li><Link>Pet Foods</Link></li>
                                <li><Link>Meats</Link></li>
                                <li><Link>Vegetables</Link></li>
                                <li><Link>Fruits</Link></li>
                            </ul>
                        </div>
                    </div> */}

                        <div className="row align-items-center">

                            {/* Title */}
                            <div className="col-12 col-lg-3 mb-2 mb-lg-0">
                                <h2 className="hd m-0">Popular Products</h2>
                            </div>

                            {/* Tabs */}
                            <div className="col-12 col-lg-9">
                                <ul className="filtterTab d-flex flex-wrap flex-lg-nowrap overflow-auto m-0 p-0">

                                    <li className="me-3">
                                        <Link to="#">All</Link>
                                    </li>

                                    <li className="me-3">
                                        <Link to="#">Milks & Dairies</Link>
                                    </li>

                                    <li className="me-3">
                                        <Link to="#">Coffees & Teas</Link>
                                    </li>

                                    <li className="me-3">
                                        <Link to="#">Pet Foods</Link>
                                    </li>

                                    <li className="me-3">
                                        <Link to="#">Meats</Link>
                                    </li>

                                    <li className="me-3">
                                        <Link to="#">Vegetables</Link>
                                    </li>

                                    <li className="me-3">
                                        <Link to="#">Fruits</Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section>

                <div className="container-fluid">
                    <div className="row g-4">
                        {
                            prod.map((item, index) => {
                                return (
                                    <div className='col-6 col-md-4 col-lg-3 col-xl-2-4'>
                                        <Products tag="hot" 
                                        prod={item} 
                                        add2card={addCard} />
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>

            </section>

        </>
    )
}

export default popularProduct