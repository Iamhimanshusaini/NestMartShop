import React, { useState, useEffect } from 'react'
import './index.css'
import Slide from '../../components/slider/slide'
import { Link } from 'react-router-dom';
import Catgoryslide from '../../../src/components/catSlider/catSlide.js';
import ThreeBanner from '../../components/banner/threeBanner.js';
import Products from '../../components/product/product.js';
import PopularProduct from '../../components/PopluarProduct/popularProduct.js'
import TopSelling from '../../components/topSelling/topSelling.js'
import DailySellings from '../../components/DailyBestSells/DailySells.js'
import axios from 'axios';
import Header from '../../components/header/header.js';
export default function index() {
    const [products, setProducts] = useState([]);
    const [allProductData, setAllProductData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://nestmart-6fkh.onrender.com/api');
                const prodaata = res.data.productData; // make sure backend se
                setProducts(prodaata)
                setAllProductData(res.data)
            } catch (error) {
                console.error('api error:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Slide />
            <Catgoryslide prod={products} />
            <ThreeBanner />
            <PopularProduct prod={products}/>
            {/* <DailySellings /> */}
            <TopSelling allProductData={allProductData} />

        </>
    )
}
