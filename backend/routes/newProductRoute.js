const express = require('express')
const router = express.Router()
const newOrderModel = require('../model_and_sehema/newOrder')


router.post('/place-order', async (req, res) => {
    try {
        const {
            userId, name, products, totalAmount, paymentMethod, address, status
        } = req.body;
        console.log(products)
        const orderId = 'ORD' + Date.now();
        const newOrder = new newOrderModel({
            orderId: orderId,
            userId: userId,
            name: name,
            products: products,
            totalAmount: totalAmount,
            paymentMethod: paymentMethod,
            address: address

        })
        const saveNewOrder = await newOrder.save()
        res.json({
            message: 'your order succesfuly place.....',
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

module.exports = router;