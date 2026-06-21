import React, { use, useState } from 'react'
import './nav.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import { LuLayoutGrid } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";
import Header from '../header/header';
import navLogo from '../../assests/images/logo.svg'


export default function menubar(props) {
    const fix = props.fixHeader
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${fix}`}>
            <div class="container-fluid border">
                <a class="navbar-brand" href="#">
                    <div className="col-lg">
                        <div className="col-category">
                            <Button> <LuLayoutGrid /> &nbsp;Browse All Categories &nbsp;<MdKeyboardArrowDown /></Button>
                        </div>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <br />

                    <div className="col-lg">
                        <div className="">
                            <nav class="nav">
                                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

                                    <li className='nav-item menuList'>
                                        <Button><MdOutlineLocalFireDepartment className='fireLogo' /> &nbsp;<Link>Deals</Link></Button>
                                    </li>
                                    <li className='nav-item menuList'>
                                        <Button><Link to='/'>Home</Link></Button>
                                    </li>
                                    <li className='nav-item menuList'>
                                        <Button><Link to='/about'>About</Link></Button>
                                    </li>
                                    <li className='nav-item menuList'>
                                        <Button><Link to='/shop'>Shop</Link></Button>
                                    </li>
                                    {/* <li className='nav-item menuList'>
                                        <Button><Link>Vendors</Link></Button>
                                    </li> */}
                                    {/* <li className='nav-item menuList' style={{ position: 'static' }}>
                                        <Button><Link>Mega</Link> &nbsp;<MdKeyboardArrowDown /></Button>
                                        <div className="pagesMenuDropdown megaDropMenu">

                                        </div>
                                    </li> */}
                                    <li className='nav-item menuList'>
                                        <Button><Link>Blog</Link></Button>
                                    </li>
                                    {/* <li className='nav-item menuList'>
                                        <Button id='pageDrop'><Link>Pages</Link>&nbsp;<MdKeyboardArrowDown /></Button>
                                        <div className="pagesMenuDropdown">
                                            <ul><li><Button><Link to='/about'>About</Link></Button></li></ul>
                                            <ul><li><Button><Link>Contact</Link></Button></li></ul>
                                            <ul><li><Button><Link>My Account</Link></Button></li></ul>
                                            <ul><li><Button><Link>Login</Link></Button></li></ul>
                                            <ul><li><Button><Link>Register</Link></Button></li></ul>
                                            <ul><li><Button><Link>Forgot password</Link></Button></li></ul>
                                            <ul><li><Button><Link>Reset password</Link></Button></li></ul>
                                            <ul><li><Button><Link>Purchase Guide</Link></Button></li></ul>
                                            <ul><li><Button><Link>Privacy Policy</Link></Button></li></ul>
                                            <ul><li><Button><Link>Terms of Service</Link></Button></li></ul>
                                        </div>
                                    </li> */}
                                    <li className='nav-item menuList'>
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                </ul>
                            </nav>
                            <nav>

                            </nav>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="col-contact">
                            <div className="contactLogo">
                                <MdOutlineHeadphones />
                            </div>
                            <div className="contactNumber">
                                <h2 className='Number'>1900 - 888</h2>
                                <span className='contactNote'>24/7 Support Center</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
        // <div className='container-fluid border'>
        //     <div className="row align-items-center">
        //         <div className="col-lg">
        //             <div className="col-category">
        //                 <Button> <LuLayoutGrid /> &nbsp;Browse All Categories &nbsp;<MdKeyboardArrowDown /></Button>
        //             </div>
        //         </div>
        //         <div className="col-lg">
        //             <div className="">
        //                 <nav class="nav">
        //                     <ul className='d-flex m-0'>
        //                         <li className='menuList'>
        //                             <Button><MdOutlineLocalFireDepartment className='fireLogo' /> &nbsp;<Link>Deals</Link></Button>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button><Link to='/'>Home</Link></Button>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button><Link to='/about'>About</Link></Button>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button><Link to='/listing'>Shop</Link></Button>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button><Link>Vendors</Link></Button>
        //                         </li>
        //                         <li className='menuList' style={{ position: 'static' }}>
        //                             <Button><Link>Mega</Link> &nbsp;<MdKeyboardArrowDown /></Button>
        //                             <div className="pagesMenuDropdown megaDropMenu">

        //                             </div>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button><Link>Blog</Link></Button>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button id='pageDrop'><Link>Pages</Link>&nbsp;<MdKeyboardArrowDown /></Button>
        //                             <div className="pagesMenuDropdown">
        //                                 <ul><li><Button><Link to='/about'>About</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Contact</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>My Account</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Login</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Register</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Forgot password</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Reset password</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Purchase Guide</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Privacy Policy</Link></Button></li></ul>
        //                                 <ul><li><Button><Link>Terms of Service</Link></Button></li></ul>
        //                             </div>
        //                         </li>
        //                         <li className='menuList'>
        //                             <Button><Link>Contact</Link></Button>
        //                         </li>
        //                     </ul>
        //                 </nav>
        //                 <nav>

        //                 </nav>
        //             </div>
        //         </div>
        //         <div className="col-lg">
        //             <div className="col-contact">
        //                 <div className="contactLogo">
        //                     <MdOutlineHeadphones />
        //                 </div>
        //                 <div className="contactNumber">
        //                     <h2 className='Number'>1900 - 888</h2>
        //                     <span className='contactNote'>24/7 Support Center</span>
        //                 </div>
        //             </div>
        //         </div>


        //     </div>
        // </div >


    )
}
