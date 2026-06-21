import React from 'react'
import './footer.css'
import { Link } from 'react-router'
import { FiPhoneCall } from "react-icons/fi";
import Button from '@mui/material/Button';
import { CiFacebook } from "react-icons/ci";


function footer() {
    return (
        <>
            <section className="newLatter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="newsContent col-lg">
                            <h2 className='fs-6 fs-md-4 fs-lg-3'>Stay home & get your daily
                                needs from our shop</h2>
                            <p className='fs-6 fs-md-4'>Start You'r Daily Shopping with <span> <Link>Nest Marts</Link> </span> </p>
                            <div className="input-btn">
                                <input type="text" placeholder='Enter Your Name...' />
                                <Button>Suscribe</Button>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="firstBgimg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-10.png" alt="" />
                            </div>
                            <div className="secBgimg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className='footerSection'>
                <div className="container-fluid">
                    <div className="row g-4 justify-content-center px-3">
                        <div className="content-col col-lg">
                            <div className="footerImg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div className="footerContent">
                                <h4>Best prices & offers</h4>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                        <div className="content-col col-lg">
                            <div className="footerImg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div className="footerContent">
                                <h4>Free delivery</h4>
                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                        <div className="content-col col-lg">
                            <div className="footerImg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div className="footerContent">
                                <h4>Great daily deal</h4>
                                <p>When you sign up</p>
                            </div>
                        </div>
                        <div className="content-col col-lg">
                            <div className="footerImg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div className="footerContent">
                                <h4>Wide assortment</h4>
                                <p>Mega Discounts</p>
                            </div>
                        </div>
                        <div className="content-col col-lg">
                            <div className="footerImg">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div className="footerContent">
                                <h4>Easy returns</h4>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="secfooter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="Company">
                            <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" />
                            <div className="menuName">
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Delivery Information</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Terms &amp; Conditions</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Support Center</Link></li>
                                    <li><Link>Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Company">
                            <h2>Company</h2>
                            <div className="menuName">
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Delivery Information</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Terms &amp; Conditions</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Support Center</Link></li>
                                    <li><Link>Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Company">
                            <h2>Account</h2>
                            <div className="menuName">
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Delivery Information</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Terms &amp; Conditions</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Support Center</Link></li>
                                    <li><Link>Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Company">
                            <h2>Corporate</h2>
                            <div className="menuName">
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Delivery Information</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Terms &amp; Conditions</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Support Center</Link></li>
                                    <li><Link>Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Company">
                            <h2>Popular</h2>
                            <div className="menuName">
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Delivery Information</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Terms &amp; Conditions</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Support Center</Link></li>
                                    <li><Link>Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="lastfooter">
                        <div className="copyrightCol">
                            <h4>© 2024, <a href="">Nest</a> - HTML Ecommerce Template <br /> All rights reserved</h4>
                        </div>
                        <div className="numberCol">
                            <div className="numberFisrt">
                                <div className="icon">
                                    <FiPhoneCall />
                                </div>

                                <div className="number">
                                    <h2>1900 - 6666</h2>
                                    <p>Working 8:00 - 22:00</p>
                                </div>

                            </div>
                            <div className="numberFisrt">
                                <div className="icon">
                                    <FiPhoneCall />
                                </div>

                                <div className="number">
                                    <h2>1900 - 6666</h2>
                                    <p>Working 8:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="followCol">
                            <h5>Follow Us</h5>
                            <div className="socialIcon">
                                <CiFacebook />
                                <CiFacebook />
                                <CiFacebook />
                                <CiFacebook />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}

export default footer