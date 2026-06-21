const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const productModel = require('../model_and_sehema/product')

router.get('/shop', async(req, res) => {
    try {
        const cateProudct = await productModel.find({})
        res.status(200).json({
            findProduct: cateProudct
        })
    } catch (error) {
        res.status(500).json({
            message: `not find ${error.message}`
        })
    }
})
module.exports = router;