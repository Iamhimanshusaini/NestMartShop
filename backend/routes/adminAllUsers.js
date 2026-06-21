const userModel = require('../model_and_sehema/user')
const express = require('express')
const router = express.Router()


router.get('/users', async (req, res) => {
    try {
        const allUsers = await userModel.find({})
        res.json({
            users: allUsers
        })
    } catch (error) {
        res.json({
            message: 'user not found'
        })
    }
})
module.exports = router;