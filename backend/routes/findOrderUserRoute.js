const express = require('express')
const router = express.Router()
const neworderModel = require('../model_and_sehema/newOrder')

router.get('/myorders/:userId', async (req, res) => {
    const { userId } = req.params
    console.log(userId)
    const myorders = await neworderModel.find({ userId})
    res.json({
        id: userId,
        orderData: myorders
    })
})
module.exports = router;