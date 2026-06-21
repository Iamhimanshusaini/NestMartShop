const express = require('express')
const router = express.Router()
const productModel = require('../model_and_sehema/product')
const { Query } = require('mongoose')
// const testProduct =require('../model_and_sehema/testmodel')

router.get('/product/all', async (req, res) => {
    try {
        // find all product Query 

        const products = await productModel.find({})

        // find recently added product Query sort via timestamp

        const recentProd = await productModel.find().sort({ createdAt: -1 }).limit(3)

        // find all product Query sort via higher rating product

        const Toprating = await productModel.find({ rating: { $gt: 2 } }).sort({ rating: -1 }).limit(3);

        // find all product Query sort via higher review product

        const trending = await productModel.find({ reviews: { $gt: 10 } }).sort({ reviews: -1 }).limit(3)

        res.status(201).json({
            message: 'succesful find',
            productData: products,
            recentProduct: recentProd,
            TopRatingProduct: Toprating,
            trendingProduct: trending
        })

    } catch (error) {
        res.status(201).json({
            message: `some problem and ${error.message}`,
        })
    }
})

module.exports = router;