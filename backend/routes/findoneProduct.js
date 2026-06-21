const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const productModel = require('../model_and_sehema/product')


router.get('/product/details/:id', async (req, res) => {
    try {
        const { id } = req.params
        const oneProduct = await productModel.findById({ _id: id })
        res.status(200).json({
            message: 'one data fetch',
            productDetail: oneProduct

        })
    } catch (error) {
        res.status(200).json({
            message: 'not fetch one product data',
            error: error.message
        })
    }

})

module.exports = router;