const express = require('express')
const router = express.Router()

const modelOrder = require('../model_and_sehema/newOrder')

router.get("/orders", async (req, res) => {

    try {

        const orders = await modelOrder.find()
            .sort({ createdAt: -1 });

        res.status(200).json({

            success: true,

            orders

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

});
module.exports = router;