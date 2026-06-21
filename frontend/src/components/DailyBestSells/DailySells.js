import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Products from '../../components/product/product.js';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
function DailySells() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: 3000,
    };
    return (
        <section className="homeProducts">
            <div className="container-fluid">
                <div className="headiingRow">
                    <h2 className='hd'>Daily Best Sells</h2>
                    <ul className='filtterTab'>
                        <li><Link>Featured</Link></li>
                        <li><Link>Popular</Link></li>
                        <li><Link>New added</Link></li>
                    </ul>
                </div>
                <div className="productRow2">
                    <div className="col-1Img">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-4.png" alt="" />
                    </div>
                    <div className="col2slider">
                        <div className="row">
                            <Slider {...settings} className='prodSlider'>
                                {
                                    products.map((item,index) => {
                                        <div className="item">
                                            <Products tag="hot" item={item} />
                                        </div>
                                    })
                                }

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailySells