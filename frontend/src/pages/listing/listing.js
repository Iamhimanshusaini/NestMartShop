import React from 'react'
import { Link } from 'react-router-dom';
import './listing.css'
import { HiOutlineHome } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import Sidebar from '../../components/sideBar/sidebar';
import Product from '../../components/product/product';
import Button from '@mui/material/Button';
import { CiGrid41 } from "react-icons/ci";
import { TbSortAscending2 } from "react-icons/tb";
import { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';



function listing() {
    //  this code use for after click any button to open page top
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [openShow, setOpenShow] = useState(false);
    const [openShow1, setOpenShow1] = useState(false);
    const { category } = useParams();
    const [findProd, setFindProd] = useState([])
    useEffect(() => {
        let url = 'https://nestmart-6fkh.onrender.com/api/shop'

        if (category) {
            url = `https://nestmart-6fkh.onrender.com/api/shop/${category}`
        }
        axios.get(url)
            .then((res) => {
                setFindProd(res.data.findProduct || []);
                // console.log(res.data.findProduct)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [category]);
    return (
        // <div className='listingPage'>
        //     <div className="container-fluid">
        //         <div className="breadcrump">
        //             <h1>Snack</h1>
        //             <ul className='listname'>
        //                 <li>
        //                     <HiOutlineHome />  <Link to='/'>Home</Link>
        //                 </li>
        //                 <li>
        //                     <RiArrowRightSLine />    <Link>Shop</Link>
        //                 </li>
        //                 <li>
        //                     <RiArrowRightSLine />   <Link>Snacks</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="listdata">
        //             <div className="row">
        //                 <div className="sidebarWrapper">
        //                     <div className="col-1">
        //                         <Sidebar />
        //                     </div>
        //                 </div>
        //                 <div className="right-Content">
        //                     <div className="productSort">
        //                         <p>We found {findProd.length} items for you!</p>
        //                         <div className="sort-Show">
        //                             <div className="show" onClick={() => { setOpenShow(!openShow) }}>
        //                                 <Button className='Sort-btn'><CiGrid41 />Show: 50</Button>
        //                                 {
        //                                     openShow === true &&
        //                                     <div className="accountMenu">
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>50</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>100</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>150</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>200</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>All</Button>
        //                                         </div>
        //                                     </div>
        //                                 }

        //                             </div>
        //                             <div className="show" onClick={() => { setOpenShow1(!openShow1) }}>
        //                                 <Button className='Sort-btn'><TbSortAscending2 />Sort By: 50</Button>
        //                                 {
        //                                     openShow1 === true &&
        //                                     <div className="accountMenu">
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>50</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>100</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>150</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>200</Button>
        //                                         </div>
        //                                         <div className="logoWithName">
        //                                             <Button variant="text"> <span className='iconDropMenu'></span>All</Button>
        //                                         </div>
        //                                     </div>
        //                                 }

        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="right-Content-row">
        //                         {
        //                             findProd.map((item, index) => {
        //                                 return
        //                                 <div className="item">
        //                                     <Product prod={item} tag='sale' />
        //                                 </div>
        //                             })
        //                         }

        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        // </div>
        <div className='listingPage'>
            <div className="container-fluid">

                {/* Breadcrumb */}
                <div className="breadcrump">
                    <h1>{category}</h1>
                    <ul className='listname'>
                        <li><HiOutlineHome /> <Link to='/'>Home</Link></li>
                        <li><RiArrowRightSLine /> <Link to='/shop'>Shop</Link></li>
                        <li><RiArrowRightSLine /> <Link>{category}</Link></li>
                    </ul>
                </div>

                {/* Main Layout */}
                <div className="row">

                    {/* Sidebar */}
                    <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                        <Sidebar product={findProd} />
                    </div>

                    {/* Products Section */}
                    <div className="col-lg-9 col-md-8 col-sm-12">

                        {/* Top Bar */}
                        <div className="productSort d-flex justify-content-between align-items-center flex-wrap mb-3">
                            <p>We found {findProd.length} items for you!</p>

                            <div className="sort-Show d-flex gap-2">

                                {/* Show Dropdown */}
                                <div className="position-relative">
                                    <Button onClick={() => setOpenShow(!openShow)}>
                                        <CiGrid41 /> Show: 50
                                    </Button>

                                    {openShow && (
                                        <div className="accountMenu position-absolute bg-white shadow p-2">
                                            {[50, 100, 150, 200, "All"].map((val) => (
                                                <Button key={val} variant="text">{val}</Button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Sort Dropdown */}
                                <div className="position-relative">
                                    <Button onClick={() => setOpenShow1(!openShow1)}>
                                        <TbSortAscending2 /> Sort
                                    </Button>

                                    {openShow1 && (
                                        <div className="accountMenu position-absolute bg-white shadow p-2">
                                            <Button variant="text">Price Low → High</Button>
                                            <Button variant="text">Price High → Low</Button>
                                            <Button variant="text">Newest</Button>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="row">
                            {
                                findProd.map((item, index) => (
                                    <div
                                        className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                                        key={index}
                                    >
                                        <Product prod={item} tag="sale" />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default listing;