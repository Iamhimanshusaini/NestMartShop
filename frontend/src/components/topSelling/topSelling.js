import React from 'react'
import { Link } from 'react-router';
import Topproduct from '../topProducts/topproduct';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import index from '../../pages/home';
function topSelling({ allProductData }) {

    return (
        <section className="topProductsSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className='topProductHeading'>Recently added</h1>
                        {allProductData.recentProduct?.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <Topproduct item={item} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col">

                        <h1 className='topProductHeading'>Top Rated</h1>
                        {allProductData.TopRatingProduct?.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <Topproduct item={item} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col">

                        <h1 className='topProductHeading'>Trending Products</h1>
                        {allProductData.trendingProduct?.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <Topproduct item={item} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col">

                        <h1 className='topProductHeading'>Top Selling</h1>
                        {allProductData.recentProduct?.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <Topproduct item={item} title='Top Selling' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default topSelling