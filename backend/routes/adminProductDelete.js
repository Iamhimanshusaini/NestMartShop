const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const productModel = require('../model_and_sehema/product')


router.delete('/admin/delete-product/:productId', async (req, res) => {
    try {
        const { productId } = req.params
        const oneProduct = await productModel.findByIdAndDelete({ _id: productId })
        res.status(200).json({
            message: 'Order Deleted',
        })
    } catch (error) {
        res.status(200).json({
            message: 'not delete',
            error: error.message
        })
    }

})

module.exports = router;