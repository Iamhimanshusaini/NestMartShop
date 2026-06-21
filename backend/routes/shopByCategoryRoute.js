const express = require('express')
const router = express.Router()
const productModel = require('../model_and_sehema/product')


router.get('/shop/:category', async (req, res) => {
    try {
        const categoryName  = req.params.category
     
        const cateProudct = await productModel.find({
            "category.name":categoryName
        })
        console.log(cateProudct)
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